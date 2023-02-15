import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatCircleTextFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-2.073 0-4.024-.526-5.725-1.451a.511.511 0 0 0-.37-.048L5.758 28.08a.5.5 0 0 1-.61-.598l1.234-5.26a.512.512 0 0 0-.047-.356 11.948 11.948 0 0 1-1.375-5.583c0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-17-2a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatCircleTextFill.displayName = "ChatCircleTextFill";

export default ChatCircleTextFill;
