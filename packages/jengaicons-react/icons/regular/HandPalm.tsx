import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const HandPalm = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
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
          strokeWidth={weight || weightCtx || "2"}
          d='M10.421 16.056V6.722c0-1.227.995-2.222 2.223-2.222v0c1.227 0 2.222.995 2.222 2.222v9.334'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M10.421 16.056v-5.707a2.222 2.222 0 0 0-4.444 0v9.422c0 4.821 3.946 8.729 8.814 8.729a8.824 8.824 0 0 0 7.791-4.644l3.199-6a2.222 2.222 0 1 0-3.96-2.017l-1.566 3.046c-.24.467-.945.296-.945-.228V8.779a2.222 2.222 0 1 0-4.444 0v7.277'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M15.548 22.5c0-1.845 1.858-3.34 4.15-3.34'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

HandPalm.displayName = "HandPalm"

export default HandPalm
