import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BellSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M7.7 4.61a1 1 0 1 0-1.48 1.346L9.898 10a11.666 11.666 0 0 0-.69 4.629c.053.891.022 1.768-.122 2.595-.308 1.762-1.692 4.115-2.469 5.33-.218.34.027.8.432.8h4.911v.986c0 1.316.53 2.574 1.47 3.5a5.03 5.03 0 0 0 3.53 1.442 5.03 5.03 0 0 0 3.53-1.442 4.913 4.913 0 0 0 1.47-3.5v-.985h.078l4.182 4.6a1 1 0 1 0 1.48-1.346l-20-22Zm12.26 18.746h-6v.985c0 .775.312 1.522.873 2.075a3.03 3.03 0 0 0 2.127.867c.8 0 1.565-.314 2.127-.867.56-.553.873-1.3.873-2.075v-.985Zm4.874-6.131a11.313 11.313 0 0 1-.123-2.595c.29-4.936-2.807-10.347-7.751-10.347-1.954 0-3.62.845-4.9 2.171l14.585 16.202c.079.088.23-.017.178-.123-.59-1.183-1.678-3.528-1.989-5.308Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BellSlashFill.displayName = "BellSlashFill"

export default BellSlashFill
