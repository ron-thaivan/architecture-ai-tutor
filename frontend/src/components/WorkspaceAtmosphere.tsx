import { useEffect, type RefObject } from "react";

const panels = ".studio-card, .studio-item, .profile-card, .autograder-card, .gr-card, .ph-tool, .ph-process";

/** Decorative motion follows the app's nested scrollers, without moving controls. */
export default function WorkspaceAtmosphere({ content, route }: {
  content: RefObject<HTMLDivElement | null>;
  route: string;
}) {
  useEffect(() => {
    const root = content.current;
    const shell = root?.parentElement;
    if (!root || !shell) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let scrollTop = 0;
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const update = () => {
      frame = 0;
      const distance = reduced.matches ? 0 : Math.min(scrollTop, 1000);
      shell.style.setProperty("--scene-depth", `${distance * .065}px`);
      shell.style.setProperty("--scene-turn", `${distance * .007}deg`);
    };
    const onScroll = (event: Event) => {
      if (event.target instanceof HTMLElement) scrollTop = event.target.scrollTop;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (reduced.matches || entry.target.contains(document.activeElement)) continue;
        const animation = entry.target.animate([
          { opacity: .72, translate: "0 18px" },
          { opacity: 1, translate: "0 0" },
        ], { duration: 650, easing: "cubic-bezier(.2,.65,.3,1)" });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { root, threshold: 0, rootMargin: "0px 0px -20px 0px" });
    const observe = (node: Element) => {
      const candidates = [...(node.matches(panels) ? [node] : []), ...node.querySelectorAll(panels)];
      for (const element of candidates) {
        if (!seen.has(element)) { seen.add(element); observer.observe(element); }
      }
    };
    observe(root);
    const mutations = new MutationObserver(records => {
      for (const record of records) for (const node of record.addedNodes) {
        if (node instanceof Element) observe(node);
      }
    });
    mutations.observe(root, { childList: true, subtree: true });
    const preferenceChanged = () => {
      for (const animation of animations) animation.cancel();
      animations.clear();
      update();
    };
    update();
    root.addEventListener("scroll", onScroll, { capture: true, passive: true });
    reduced.addEventListener("change", preferenceChanged);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mutations.disconnect();
      root.removeEventListener("scroll", onScroll, true);
      reduced.removeEventListener("change", preferenceChanged);
      for (const animation of animations) animation.cancel();
      shell.style.removeProperty("--scene-depth");
      shell.style.removeProperty("--scene-turn");
    };
  }, [content, route]);

  return <div className="workspace-atmosphere" aria-hidden="true">
    <div className="atmosphere-orbit" />
    <div className="atmosphere-plane" />
    <div className="atmosphere-grid" />
  </div>;
}
