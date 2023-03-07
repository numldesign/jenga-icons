import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const RainbowCloudFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M11.633 11.166a9.286 9.286 0 0 1 10.084 1.895 1 1 0 0 0 1.394-1.435A11.286 11.286 0 0 0 3.96 19.715v1.715a1 1 0 1 0 2 0v-1.714a9.286 9.286 0 0 1 5.673-8.55Zm.967 3.32a5.857 5.857 0 0 1 6.115.506 1 1 0 1 0 1.184-1.612 7.857 7.857 0 0 0-12.51 6.335v1.714a1 1 0 1 0 2 0v-1.714a5.857 5.857 0 0 1 3.21-5.229Zm2.877 2.797c-.078.002-.15.003-.227.003h-.004a2.429 2.429 0 0 0-2.429 2.43v1.713a1 1 0 1 1-2 0v-1.714a4.429 4.429 0 0 1 4.427-4.429l.129-.001c.138-.002.348-.006.51-.005.219.001.596.006.865.073a1 1 0 0 1-.472 1.944h-.005c-.011-.002-.04-.006-.094-.009a5.774 5.774 0 0 0-.303-.008c-.159 0-.282.002-.397.003Zm3.235.435a3.23 3.23 0 0 1 1.358.052c.333-.65.982-1.57 1.576-1.998a4.614 4.614 0 0 1 7.247 4.527 4.616 4.616 0 0 1-.856 1.987 7.943 7.943 0 0 1-.764.839c-.752.722-1.793 1.007-2.835 1.007h-5.171a3.23 3.23 0 0 1-3.203-3.636 3.231 3.231 0 0 1 2.648-2.778Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

RainbowCloudFill.displayName = "RainbowCloudFill"

export default RainbowCloudFill
