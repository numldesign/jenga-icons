import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const HeartbeatFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M16.724 26.706a.45.45 0 0 0 .471 0c1.68-.992 11.765-7.262 11.765-14.743a6.241 6.241 0 0 0-12-2.404 6.241 6.241 0 0 0-12 2.404c0 1.14.234 2.25.637 3.32h4.108l1.623-2.435a1 1 0 0 1 1.664 0L16 17.36l1.088-1.632a1 1 0 0 1 .832-.445h2.88a1 1 0 1 1 0 2h-2.345l-1.623 2.435a1 1 0 0 1-1.664 0l-3.008-4.512-1.088 1.632a1 1 0 0 1-.832.445H6.562c2.915 4.966 8.904 8.68 10.162 9.423Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

HeartbeatFill.displayName = "HeartbeatFill"

export default HeartbeatFill
