import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const KanbanFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M3.96 5.374a1 1 0 0 1 1-1h16.363c.035 0 .069.002.102.005h7.53a1 1 0 0 1 1 1v8.628c.004.031.005.063.005.094v8.738a1 1 0 0 1-1 1h-7.636a1 1 0 0 1-1-1v-3.374h-7.728v6.727a1 1 0 0 1-1 1H4.968a1 1 0 0 1-1-1V14.23a1.011 1.011 0 0 1-.008-.129V5.374Zm7.636 1V13.1H5.96V6.374h5.636Zm2 7.744v3.347h6.727V6.374h-6.727V14.118Zm8.728 7.721v-6.738h5.636v6.738h-5.636Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

KanbanFill.displayName = "KanbanFill"

export default KanbanFill
