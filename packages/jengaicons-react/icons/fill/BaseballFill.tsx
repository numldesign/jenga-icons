import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BaseballFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 28.283c2.98 0 5.708-1.087 7.806-2.886a14.18 14.18 0 0 1-.944-1.26 1 1 0 0 1 1.665-1.109c.215.323.445.636.691.938a11.951 11.951 0 0 0 2.782-7.683c0-2.923-1.045-5.602-2.782-7.683-.246.302-.477.615-.691.938a1 1 0 1 1-1.665-1.11c.29-.435.605-.856.945-1.259a11.953 11.953 0 0 0-7.807-2.886 11.953 11.953 0 0 0-7.807 2.886c.34.404.654.824.945 1.26a1 1 0 0 1-1.665 1.109 12.156 12.156 0 0 0-.691-.938 11.951 11.951 0 0 0-2.782 7.683c0 2.923 1.045 5.601 2.782 7.683.246-.302.476-.615.691-.938a1 1 0 0 1 1.665 1.11c-.29.435-.606.855-.945 1.259a11.953 11.953 0 0 0 7.807 2.886Zm5.932-15.544a1 1 0 0 1 .786 1.176 12.159 12.159 0 0 0 0 4.736 1 1 0 0 1-1.962.39 14.167 14.167 0 0 1 0-5.516 1 1 0 0 1 1.176-.786Zm-12.65 1.176a1 1 0 0 1 1.962-.39 14.166 14.166 0 0 1 0 5.516 1 1 0 1 1-1.962-.39 12.168 12.168 0 0 0 0-4.736Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BaseballFill.displayName = "BaseballFill";

export default BaseballFill;
