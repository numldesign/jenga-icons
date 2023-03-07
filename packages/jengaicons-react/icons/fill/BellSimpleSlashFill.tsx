import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BellSimpleSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d='M6.287 4.543A1 1 0 0 1 7.7 4.61l20 22a1 1 0 1 1-1.48 1.346l-4.182-4.6H7.048c-.404 0-.649-.46-.43-.801.776-1.215 2.16-3.567 2.468-5.33.144-.827.175-1.704.123-2.595A11.666 11.666 0 0 1 9.898 10L6.22 5.956a1 1 0 0 1 .067-1.413ZM11.96 28.28a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm12.875-11.055a11.313 11.313 0 0 1-.123-2.595C25 9.694 21.904 4.283 16.96 4.283c-1.953 0-3.619.845-4.9 2.171l14.753 16.16c.082.09.242-.027.183-.133-.692-1.247-1.861-3.538-2.161-5.256Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BellSimpleSlashFill.displayName = "BellSimpleSlashFill"

export default BellSimpleSlashFill
