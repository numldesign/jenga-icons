import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PencilSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.467 4.307 28.96 10.8 14.787 24.973 8.293 18.48 22.467 4.307Zm.126.161 6.331 6.332-3.35 3.35-6.331-6.332 3.35-3.35Zm-7.855 20.527-6.852-.169.42-6.287 6.432 6.456Z"
          clip-rule="evenodd"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m28.96 10.8.707.707a1 1 0 0 0 0-1.414l-.707.707Zm-6.493-6.493.707-.707a1 1 0 0 0-1.414 0l.707.707Zm-7.68 20.666-.708.707a1 1 0 0 0 1.415 0l-.707-.707ZM8.293 18.48l-.707-.707a1 1 0 0 0 0 1.414l.707-.707Zm20.631-7.68.707.707a1 1 0 0 0 0-1.414l-.707.707Zm-6.331-6.332.707-.707a1 1 0 0 0-1.415 0l.708.707Zm2.982 9.682-.707.707a1 1 0 0 0 1.414 0l-.707-.707Zm-6.332-6.332-.707-.707a1 1 0 0 0 0 1.414l.707-.707ZM7.886 24.826l-.998-.067a1 1 0 0 0 .974 1.067l.024-1Zm6.852.17-.024.999a1 1 0 0 0 .733-1.705l-.709.705Zm-6.431-6.457.708-.706a1 1 0 0 0-1.706.639l.998.067Zm21.36-8.446L23.174 3.6 21.76 5.014l6.493 6.493 1.414-1.414ZM15.494 25.68l14.173-14.173-1.414-1.414-14.174 14.173 1.415 1.414Zm-7.908-6.493 6.493 6.493 1.415-1.414L9 17.773l-1.415 1.414ZM21.76 3.6 7.586 17.773l1.415 1.414L23.174 5.014 21.76 3.6Zm7.871 6.493L23.3 3.76l-1.415 1.414 6.332 6.332 1.415-1.414Zm-3.35 4.764 3.35-3.35-1.414-1.414-3.35 3.35 1.415 1.414Zm-7.745-6.332 6.331 6.332 1.415-1.414L19.95 7.11l-1.414 1.414Zm3.35-4.764-3.35 3.35 1.414 1.414 3.35-3.35-1.415-1.414ZM7.862 25.826l6.852.169.049-2-6.852-.169-.05 2Zm-.553-7.354-.42 6.287 1.995.134.42-6.288-1.995-.133Zm8.138 5.818-6.432-6.457-1.417 1.411 6.432 6.457 1.417-1.411Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PencilSimpleFill.displayName = "PencilSimpleFill";

export default PencilSimpleFill;
