import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileArrowUpFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M26.96 27.283a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.606a1 1 0 0 1 .709.294L26.669 11a1 1 0 0 1 .291.705v15.579ZM19.943 5.717v5.22a.5.5 0 0 0 .5.5h5.225l-5.725-5.72Zm-1.983 17.37a1 1 0 0 1-2 0v-5.39l-1.905 1.905a1 1 0 0 1-1.414-1.415l3.612-3.611a.995.995 0 0 1 1.123-.203.996.996 0 0 1 .3.212l3.603 3.602a1 1 0 0 1-1.415 1.415l-1.904-1.905v5.39Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileArrowUpFill.displayName = "FileArrowUpFill";

export default FileArrowUpFill;
