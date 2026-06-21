import { useMotionValue, useReducedMotion, useSpring, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PortraitFrameProps = {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
};

const PortraitFrame = ({ src, alt, className, priority = false }: PortraitFrameProps) => {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 24 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 24 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateX.set(vertical * -6);
    rotateY.set(horizontal * 6);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={cn("group relative isolate", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{
        rotateX: reduceMotion ? 0 : smoothRotateX,
        rotateY: reduceMotion ? 0 : smoothRotateY,
        transformPerspective: 1000,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-20 rounded-[1.75rem] bg-primary/10 blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl border border-primary/25 bg-primary/[0.03] transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2"
      />

      <div className="relative h-full overflow-hidden rounded-2xl bg-secondary shadow-[0_20px_55px_-28px_hsl(var(--foreground)/0.45)]">
        <div className="relative h-full overflow-hidden rounded-2xl">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.018]"
            width={384}
            height={448}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-white/5" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        </div>
      </div>

      <div aria-hidden="true" className="absolute -left-1 top-8 h-20 w-1 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.45)]" />
      <div aria-hidden="true" className="absolute -bottom-1.5 right-7 h-1 w-16 rounded-full bg-destructive/90" />
    </motion.div>
  );
};

export default PortraitFrame;
