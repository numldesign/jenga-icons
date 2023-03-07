import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PersonSimpleWalkFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M22.563 7.552a2.77 2.77 0 1 1-5.538 0 2.77 2.77 0 0 1 5.538 0Zm-6.442 5.94c-1.038-.26-2.296.007-3.648.658-1.638.79-3.152 2.025-4.03 2.915a1 1 0 0 1-1.424-1.405c.995-1.008 2.69-2.398 4.586-3.312 1.856-.894 4.183-1.459 6.207-.318a1 1 0 0 1 .274.229c.806.959 2.203 2.37 3.744 3.451.769.54 1.545.978 2.276 1.245.736.267 1.365.339 1.878.231a1 1 0 0 1 .41 1.958c-1 .21-2.025.034-2.971-.31-.95-.346-1.885-.885-2.743-1.487a22.344 22.344 0 0 1-2.956-2.526l-1.57 3.612 4.173 2.993a1 1 0 0 1 .417.813v6.535a1 1 0 1 1-2 0v-6.022l-3.406-2.443-3.857 8.873a1 1 0 0 1-1.835-.798l6.475-14.892Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PersonSimpleWalkFill.displayName = "PersonSimpleWalkFill"

export default PersonSimpleWalkFill
