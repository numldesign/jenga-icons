import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CrownSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m5.225 11.996 3.17 12.935c.068.276.35.44.625.367 6.331-1.668 13.195-.771 16.353.005a.51.51 0 0 0 .622-.387l2.737-12.925a.5.5 0 0 0-.732-.54l-6.113 3.404a.5.5 0 0 1-.684-.2l-3.615-6.704a.5.5 0 0 0-.881.003l-3.57 6.708a.5.5 0 0 1-.675.207l-6.519-3.435a.5.5 0 0 0-.718.562Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CrownSimpleFill.displayName = "CrownSimpleFill";

export default CrownSimpleFill;
