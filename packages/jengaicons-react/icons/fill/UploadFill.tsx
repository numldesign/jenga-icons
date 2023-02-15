import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UploadFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.055 8.985a.982.982 0 0 0 1.404 0L16 6.406v9.739a1 1 0 1 0 2 0V6.406l2.542 2.579a.982.982 0 0 0 1.403 0 1.018 1.018 0 0 0 0-1.425l-4.22-4.283a.982.982 0 0 0-1.426-.023v.001a.94.94 0 0 0-.02.02L12.055 7.56a1.018 1.018 0 0 0 0 1.425ZM28.96 26.668v-7.143a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v7.143a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1Zm-5.077-2.2c.765 0 1.385-.614 1.385-1.372 0-.757-.62-1.371-1.385-1.371s-1.384.614-1.384 1.371c0 .758.62 1.372 1.384 1.372Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

UploadFill.displayName = "UploadFill";

export default UploadFill;
