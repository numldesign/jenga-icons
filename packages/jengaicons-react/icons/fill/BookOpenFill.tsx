import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BookOpenFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.96 6.484h-7.5a.5.5 0 0 0-.5.5v15.745a.5.5 0 0 0 .5.5h7.132a4 4 0 0 1 3.558 2.172l.35.68V8.62a4 4 0 0 0-3.54-2.136Zm4.54 1.991v17.45l.27-.524a4 4 0 0 1 3.557-2.172h7.133a.5.5 0 0 0 .5-.5V6.984a.5.5 0 0 0-.5-.5h-7.5c-1.477 0-2.767.8-3.46 1.991Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BookOpenFill.displayName = "BookOpenFill";

export default BookOpenFill;
