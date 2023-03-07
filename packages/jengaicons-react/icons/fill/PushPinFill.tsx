import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PushPinFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext)

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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 32 32'
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule='evenodd'
        d='M28.253 11.927a1 1 0 0 1 0 1.414l-7.297 7.295a4.73 4.73 0 0 1-.436 6.19l-.75.75a1 1 0 0 1-1.415 0l-5.91-5.909-5.052 5.05a1 1 0 1 1-1.414-1.414l5.051-5.05-5.362-5.361a1 1 0 0 1 0-1.415l.75-.75a4.734 4.734 0 0 1 6.184-.441L19.9 4.99a1 1 0 0 1 1.414 0l6.939 6.937Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

PushPinFill.displayName = "PushPinFill"

export default PushPinFill
