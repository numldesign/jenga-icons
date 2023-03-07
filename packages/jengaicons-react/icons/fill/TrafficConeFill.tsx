import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TrafficConeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M14.865 5.668a1 1 0 0 0-.945.671l-1.987 5.713h8.134L18.079 6.34a1 1 0 0 0-.944-.671h-2.27Zm5.897 8.384h-9.525l-1.873 5.385h13.271l-1.873-5.385ZM7.232 25.57l1.437-4.133H23.33l1.438 4.133c.038.11.056.22.056.328H28a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h3.175c0-.108.018-.218.056-.328Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

TrafficConeFill.displayName = "TrafficConeFill"

export default TrafficConeFill
