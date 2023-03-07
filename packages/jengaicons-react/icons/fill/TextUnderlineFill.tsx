import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TextUnderlineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M11.247 7.891a1 1 0 1 0-2 0v6.714a7.713 7.713 0 0 0 15.427 0V7.89a1 1 0 1 0-2 0v6.714a5.713 5.713 0 0 1-11.427 0V7.89ZM7.73 23.675a1 1 0 1 0 0 2h18.462a1 1 0 0 0 0-2H7.729Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

TextUnderlineFill.displayName = "TextUnderlineFill"

export default TextUnderlineFill
