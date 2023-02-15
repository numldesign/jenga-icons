import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SimCardFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.979 28.283H7.94a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.61a1 1 0 0 1 .707.293l6.428 6.427a1 1 0 0 1 .293.707v15.573a1 1 0 0 1-1 1ZM22.97 14.259H10.95a1 1 0 0 0-1 1v4.464a1.014 1.014 0 0 0 0 .09v4.463a1 1 0 0 0 1 1H22.97a1 1 0 0 0 1-1v-9.017a1 1 0 0 0-1-1Zm-11.021 2v2.509h4.01v-2.509h-4.01Zm0 7.017v-2.508h4.01v2.508h-4.01Zm10.021 0H17.96v-2.508h4.011v2.508Zm-4.011-4.508h4.011v-2.509H17.96v2.509Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SimCardFill.displayName = "SimCardFill";

export default SimCardFill;
