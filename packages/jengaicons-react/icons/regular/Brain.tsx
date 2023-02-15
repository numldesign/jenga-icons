import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Brain = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
    style: styleCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M12.451 10.934v.885a3.097 3.097 0 0 1-3.097 3.097M7.811 21.266l.49.07a1.733 1.733 0 0 0 1.961-1.473M21.884 19.395l.076.49a1.734 1.734 0 0 0 1.981 1.444M16 21.564v-.888a3.107 3.107 0 0 0-3.108-3.107"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M16 21.564v-.888a3.107 3.107 0 0 1 3.108-3.107M19.493 10.934v.885a3.097 3.097 0 0 0 3.096 3.097"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M15.998 23.181v-1a1 1 0 0 0-1 .972l1 .028Zm-7.588-1.8.906.424a1 1 0 0 0-.813-1.42l-.093.996Zm-.69-9.575.235.972a1 1 0 0 0 .613-1.503l-.848.531ZM16 23.181v1a1 1 0 0 0 1-1h-1Zm-1.001-.028a2.981 2.981 0 0 1-2.98 2.894v2a4.981 4.981 0 0 0 4.979-4.838l-2-.056Zm-2.98 2.894a2.981 2.981 0 0 1-2.982-2.981h-2a4.981 4.981 0 0 0 4.982 4.981v-2Zm-2.982-2.981c0-.453.1-.88.28-1.261l-1.813-.847a4.966 4.966 0 0 0-.467 2.108h2Zm-.534-2.68A3.867 3.867 0 0 1 5 16.536H3a5.867 5.867 0 0 0 5.318 5.841l.185-1.991ZM5 16.536a3.868 3.868 0 0 1 2.955-3.758l-.47-1.944A5.868 5.868 0 0 0 3 16.536h2Zm3.568-5.26a3.459 3.459 0 0 1-.527-1.843h-2c0 1.064.304 2.061.831 2.903l1.696-1.06ZM8.04 9.432a3.48 3.48 0 0 1 3.48-3.48v-2a5.48 5.48 0 0 0-5.48 5.48h2Zm3.48-3.48A3.48 3.48 0 0 1 15 9.433h2a5.48 5.48 0 0 0-5.48-5.48v2ZM15 9.433v.004h2v-.004h-2Zm0 .004v13.629h2V9.436h-2Zm0 13.629v.115h2v-.115h-2Zm1-.885h-.002v2H16v-2Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M16.002 23.181v-1a1 1 0 0 1 1 .972l-1 .028Zm7.588-1.8-.906.424a1 1 0 0 1 .813-1.42l.093.996Zm.69-9.575-.235.972a1 1 0 0 1-.613-1.503l.848.531ZM16 23.181v1a1 1 0 0 1-1-1h1Zm1.001-.028a2.981 2.981 0 0 0 2.98 2.894v2a4.981 4.981 0 0 1-4.979-4.838l2-.056Zm2.98 2.894a2.981 2.981 0 0 0 2.982-2.981h2a4.981 4.981 0 0 1-4.982 4.981v-2Zm2.982-2.981c0-.453-.1-.88-.28-1.261l1.813-.847c.3.641.467 1.356.467 2.108h-2Zm.534-2.68A3.867 3.867 0 0 0 27 16.536h2a5.867 5.867 0 0 1-5.318 5.841l-.185-1.991ZM27 16.536a3.868 3.868 0 0 0-2.955-3.758l.47-1.944A5.868 5.868 0 0 1 29 16.536h-2Zm-3.568-5.26a3.46 3.46 0 0 0 .527-1.843h2a5.458 5.458 0 0 1-.831 2.903l-1.696-1.06Zm.527-1.843a3.48 3.48 0 0 0-3.48-3.48v-2a5.48 5.48 0 0 1 5.48 5.48h-2Zm-3.48-3.48A3.48 3.48 0 0 0 17 9.433h-2a5.48 5.48 0 0 1 5.48-5.48v2ZM17 9.433v.004h-2v-.004h2Zm0 .004v13.629h-2V9.436h2Zm0 13.629v.115h-2v-.115h2Zm-1-.885h.002v2H16v-2Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Brain.displayName = "Brain";

export default Brain;
