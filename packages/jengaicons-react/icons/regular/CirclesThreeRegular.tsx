import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CirclesThreeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M16 14.56a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM23.2 27.04a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM8.8 27.04a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CirclesThreeRegular.displayName = "CirclesThreeRegular";

export default CirclesThreeRegular;
