import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AlignTopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28.96 4.283h-24"
      />
      <rect
        width="7.318"
        height="19.826"
        x="7.55"
        y="8.457"
        fill={color || colorCtx || "#000000"}
        rx="1"
      />
      <rect
        width="7.318"
        height="14.608"
        x="19.05"
        y="8.457"
        fill={color || colorCtx || "#000000"}
        rx="1"
      />

      {children || childrenCtx}
    </svg>
  );
});

AlignTopFill.displayName = "AlignTopFill";

export default AlignTopFill;
