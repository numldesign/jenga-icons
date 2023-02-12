import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ScrollFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.848 10.14H4.96V7.767a3 3 0 0 1 3-3h.888"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M8.802 3.773h15.684a2 2 0 0 1 2 2v16.125c0 .594.48 1.075 1.074 1.075.572 0 1.05.45 1.027 1.021-.155 3.76-2.398 4.783-3.799 4.806H10.802a2 2 0 0 1-2-2V3.773Zm4.219 9.03a1 1 0 0 1 1-1h8.31a1 1 0 1 1 0 2h-8.31a1 1 0 0 1-1-1Zm0 4.515a1 1 0 0 1 1-1h8.31a1 1 0 1 1 0 2h-8.31a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M28.96 22.436a.01.01 0 0 0-.01-.01H11.948a.01.01 0 0 0-.01.01v.312c0 .006.005.01.01.01 1.369.006 2.476 1.132 2.476 2.52 0 1.386-1.101 2.51-2.464 2.521h14a3 3 0 0 0 3-3v-2.363Z"
        clip-rule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="m11.96 27.8-.009-1a1 1 0 0 0 .01 2v-1Zm-.012-5.042-.004 1 .004-1Zm0 .668H28.95v-2H11.948v2Zm.99-.678v-.312h-2v.312h2Zm-.994 1.01c.805.004 1.48.67 1.48 1.52h2c0-1.926-1.54-3.512-3.471-3.52l-.008 2Zm1.48 1.52c0 .849-.67 1.514-1.473 1.521l.018 2c1.924-.017 3.455-1.6 3.455-3.52h-2ZM20.45 26.8H11.96v2h8.49v-2Zm5.51 0h-5.51v2h5.51v-2Zm2-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm0-2.363v2.363h2v-2.363h-2Zm-17.02.312c0 .566.459 1.008 1.005 1.01l.009-2a.99.99 0 0 1 .986.99h-2Zm18.01.678a.99.99 0 0 1-.99-.99h2a1.01 1.01 0 0 0-1.01-1.01v2Zm-17-2a1.01 1.01 0 0 0-1.01 1.01h2a.99.99 0 0 1-.99.99v-2Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

ScrollFill.displayName = "ScrollFill";

export default ScrollFill;
