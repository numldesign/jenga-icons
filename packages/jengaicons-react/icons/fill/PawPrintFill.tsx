import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PawPrintFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M15.114 8.937a2.308 2.308 0 1 1-4.616 0 2.308 2.308 0 0 1 4.616 0Zm-7.846 7.846a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615Zm19.384 0a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615Zm-5.538-5.539a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.616Zm-.162 5.758a5.031 5.031 0 0 0 2.377 3 3.692 3.692 0 0 1-3.196 6.646 8.284 8.284 0 0 0-6.346 0 3.693 3.693 0 0 1-3.196-6.646 5.031 5.031 0 0 0 2.377-3 4.154 4.154 0 0 1 7.984 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PawPrintFill.displayName = "PawPrintFill";

export default PawPrintFill;
