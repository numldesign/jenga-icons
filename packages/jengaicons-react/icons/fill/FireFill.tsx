import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FireFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.133 10.643a.494.494 0 0 1 .69-.142l3.784 2.516a.5.5 0 0 0 .728-.201l3.52-7.395a.496.496 0 0 1 .803-.138c3.314 3.359 7.131 7.878 7.131 13.67a9.83 9.83 0 0 1-19.659 0c0-2.753 1.328-5.697 3.003-8.31Zm13.83 9.403a1 1 0 1 0-1.976-.313 5.108 5.108 0 0 1-4.247 4.247 1 1 0 0 0 .312 1.976 7.11 7.11 0 0 0 5.91-5.91Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FireFill.displayName = "FireFill";

export default FireFill;
