import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FunctionFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M16.935 9.197a6 6 0 0 1 5.915-4.99h3.604a1 1 0 1 1 0 2H22.85a4 4 0 0 0-3.942 3.326L16.546 23.37a6 6 0 0 1-5.915 4.99H7.466a1 1 0 1 1 0-2h3.165a4 4 0 0 0 3.943-3.326l2.361-13.836ZM27.161 20.38a1 1 0 0 1 0 1.414l-2.429 2.429 2.43 2.429a1 1 0 1 1-1.415 1.414l-2.429-2.429-2.429 2.429a1 1 0 0 1-1.414-1.414l2.429-2.43-2.43-2.428a1 1 0 0 1 1.415-1.414l2.43 2.429 2.428-2.43a1 1 0 0 1 1.414 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FunctionFill.displayName = "FunctionFill"

export default FunctionFill
