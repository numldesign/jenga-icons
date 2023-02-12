import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AlarmRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 10.715v6.6h6.6"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M16 27.685c5.728 0 10.37-4.643 10.37-10.37 0-5.728-4.642-10.371-10.37-10.371-5.728 0-10.37 4.643-10.37 10.37 0 5.728 4.642 10.371 10.37 10.371Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m24 5.315 4 4M4 9.315l4-4"
      />

      {children || childrenCtx}
    </svg>
  );
});

AlarmRegular.displayName = "AlarmRegular";

export default AlarmRegular;
