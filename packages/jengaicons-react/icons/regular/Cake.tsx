import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Cake = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight, style } = props

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
    style: styleCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M16 13.73v-2.769M16 10.961C21.333 9.115 16 4.5 16 4.5s-5.539 4.615 0 6.461ZM19.923 18.116a3.923 3.923 0 0 1-7.846 0'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M12.077 18.115a3.923 3.923 0 0 1-3.847 3.923c-2.2.042-4-1.8-4-4V16.5A2.77 2.77 0 0 1 7 13.73h18a2.77 2.77 0 0 1 2.77 2.77v1.538c0 2.2-1.801 4.042-4 4a3.924 3.924 0 0 1-3.847-3.923'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M26.154 21.262v6.315a.923.923 0 0 1-.923.923H6.769a.923.923 0 0 1-.923-.923v-6.315'
      />

      {children || childrenCtx}
    </svg>
  )
})

Cake.displayName = "Cake"

export default Cake
