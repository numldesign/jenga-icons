import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const VaultFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M4.96 6.783a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-2v3a1 1 0 0 1-2 0v-3h-14v3a1 1 0 0 1-2 0v-3h-2a1 1 0 0 1-1-1v-16Zm12.851 8a3.074 3.074 0 1 1 6.149 0 3.074 3.074 0 0 1-6.149 0Zm3.075-5.074a5.075 5.075 0 1 0 0 10.149 5.075 5.075 0 0 0 0-10.15ZM9.81 11.81a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm12.704 2.973a1.63 1.63 0 1 1-3.26 0 1.63 1.63 0 0 1 3.26 0Zm-13.704.972a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2-4.945a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 1.945a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

VaultFill.displayName = "VaultFill"

export default VaultFill
