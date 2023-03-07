import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ChalkboardFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M6.674 8.64a.5.5 0 0 1 .5-.5h19.572a.5.5 0 0 1 .5.5v14.786h1.714a1 1 0 0 1 0 2h-24a1 1 0 1 1 0-2h1.714V8.64Zm4.429 14.786h-2V11.569a1 1 0 0 1 1-1h13.714a1 1 0 0 1 1 1v5.198a1 1 0 1 1-2 0V12.57H11.103v10.857Zm4 0h2v-1.429h5.714v1.429h2v-2.429a1 1 0 0 0-1-1h-7.714a1 1 0 0 0-1 1v2.429Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ChalkboardFill.displayName = "ChalkboardFill"

export default ChalkboardFill
