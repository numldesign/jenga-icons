import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BellFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M6.617 22.555c-.218.34.026.8.431.8h4.912v.986c0 1.316.53 2.574 1.47 3.5a5.03 5.03 0 0 0 3.53 1.442 5.03 5.03 0 0 0 3.53-1.442 4.913 4.913 0 0 0 1.47-3.5v-.985h4.911c.405 0 .65-.46.432-.802-.777-1.214-2.161-3.566-2.469-5.329a11.313 11.313 0 0 1-.122-2.595C25 9.694 21.904 4.283 16.96 4.283S8.919 9.694 9.208 14.63c.052.891.022 1.768-.123 2.595-.307 1.762-1.692 4.115-2.468 5.33Zm13.343.8h-6v.986c0 .775.312 1.522.873 2.075a3.03 3.03 0 0 0 2.127.867c.8 0 1.565-.314 2.127-.867.56-.553.873-1.3.873-2.075v-.985Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

BellFill.displayName = "BellFill"

export default BellFill
