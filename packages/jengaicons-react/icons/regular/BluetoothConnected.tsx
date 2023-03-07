import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const BluetoothConnected = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='m7.5 10 8 6M7.5 22l8-6'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM25 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='m23.5 10-8-6v12l8-6ZM23.5 22l-8-6v12l8-6Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BluetoothConnected.displayName = "BluetoothConnected"

export default BluetoothConnected
