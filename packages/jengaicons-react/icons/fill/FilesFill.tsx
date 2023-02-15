import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FilesFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.96 3.283a1 1 0 0 0-1 1v4h-2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1v-14.16a1 1 0 0 0-.277-.69L22.1 3.591a1 1 0 0 0-.723-.31H10.96Zm12 20h3V10.524l-5.01-5.241h-8.99v3h4.99a1 1 0 0 1 .723.309l5.01 5.241a1 1 0 0 1 .277.691v8.76Zm-11-5a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Zm0 4a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FilesFill.displayName = "FilesFill";

export default FilesFill;
