import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BugBeetleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.473 4.573A1 1 0 0 0 8.06 5.987l3.267 3.267a8.188 8.188 0 0 0-2.3 3.894h15.868a8.188 8.188 0 0 0-2.28-3.875l3.284-3.286a1 1 0 0 0-1.414-1.414L20.99 8.068a8.157 8.157 0 0 0-4.03-1.058c-1.455 0-2.821.38-4.006 1.044l-3.48-3.481ZM3.96 18.148a1 1 0 0 1 1-1h3.806v-2h16.388v2h3.806a1 1 0 0 1 0 2h-3.806a8.204 8.204 0 0 1-.26 2h4.066a1 1 0 0 1 0 2H24.08a8.197 8.197 0 0 1-6.121 4.077v-9.077a1 1 0 0 0-2 0v9.077a8.197 8.197 0 0 1-6.121-4.077H4.96a1 1 0 1 1 0-2h4.066a8.204 8.204 0 0 1-.26-2H4.96a1 1 0 0 1-1-1Zm1.263-5a1 1 0 0 0 0 2h3.543l.25-2H5.223Zm23.473 2h-3.542l-.248-2h3.79a1 1 0 0 1 0 2Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BugBeetleFill.displayName = "BugBeetleFill";

export default BugBeetleFill;
