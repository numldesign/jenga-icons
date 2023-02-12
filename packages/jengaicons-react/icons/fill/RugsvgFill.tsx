import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RugsvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.652 7.052V4.283M14.19 7.052V4.283M25.268 7.052V4.283M8.652 28.283v-2.77M14.19 28.283v-2.77M19.73 7.052V4.283M19.73 28.283v-2.77M25.268 28.283v-2.77"
      />
      <rect
        width="16.615"
        height="18.462"
        x="8.652"
        y="7.052"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        rx=".5"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14.157 15.932 2.596-4.182a.1.1 0 0 1 .168-.004l2.837 4.183a.1.1 0 0 1 .003.107l-2.837 4.76a.1.1 0 0 1-.174-.003l-2.596-4.76a.1.1 0 0 1 .003-.1Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

RugsvgFill.displayName = "RugsvgFill";

export default RugsvgFill;
