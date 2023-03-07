import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const HandWavingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M11.673 28.783a12.808 12.808 0 0 1-3.8-4.135M22.571 4.783a5.968 5.968 0 0 1 5.17 2.986'
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule='evenodd'
          d='M6.812 12.394a2.223 2.223 0 0 0-.336 2.666l4.71 8.16c2.411 4.175 7.783 5.587 11.998 3.153a8.824 8.824 0 0 0 4.426-7.918l-.23-6.796a2.222 2.222 0 0 0-4.439.234l.168 3.42a.49.49 0 0 1-.384.512c-.816.505-1.375 1.328-1.634 2.214-.269.925-.195 1.855.182 2.508a.5.5 0 0 1-.866.5c-.545-.944-.602-2.169-.276-3.288.29-.99.892-1.946 1.796-2.602l-4.69-8.123a2.222 2.222 0 0 0-2.093-1.105 2 2 0 0 0-1.54 2.7l3.856 6.679a.5.5 0 0 1-.183.683l-.008.005-.011.006a.5.5 0 0 1-.683-.183l-2.958 1.708a.5.5 0 0 1-.189.686.5.5 0 0 1-.683-.183l-3.029-5.247a1.978 1.978 0 0 0-2.904-.389Zm6.805 5.133 2.957-1.708-3.704-6.416a3.039 3.039 0 0 1-.166-.334l-.776-1.344a1.722 1.722 0 0 0-2.983 1.722l1.619 2.805c.036.053.07.108.102.165l2.95 5.11Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

HandWavingFill.displayName = "HandWavingFill"

export default HandWavingFill
