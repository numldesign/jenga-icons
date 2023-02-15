import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SuitcaseSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M11.96 4.783a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v8.88l24 .24v-9.12a1 1 0 0 0-1-1h-5v-4a1 1 0 0 0-1-1h-10Zm9 5v-3h-8v3h8Zm-16 11.88 24 .24v4.88a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-5.12Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SuitcaseSimpleFill.displayName = "SuitcaseSimpleFill";

export default SuitcaseSimpleFill;
