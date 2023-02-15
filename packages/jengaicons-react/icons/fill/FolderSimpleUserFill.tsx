import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleUserFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.668a1 1 0 0 0-1 1v19.23a1 1 0 0 0 1 1h10.57a1 1 0 1 0 0-2H5.96V7.668h6.609l3.713 3.427a.996.996 0 0 0 .678.265h11V13.2a1 1 0 0 0 2 0V10.36a1 1 0 0 0-1-1H17.35l-3.712-3.427a1 1 0 0 0-.678-.265h-8Zm21.994 13.224a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6.884 6.016a4.008 4.008 0 0 1 7.767 0c.136.536-.325.99-.877.99h-6.013c-.552 0-1.012-.454-.877-.99Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderSimpleUserFill.displayName = "FolderSimpleUserFill";

export default FolderSimpleUserFill;
