import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FileCssFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M5.916 18.367H27.62a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.291-.705L21.934 3.56a1 1 0 0 0-.709-.294H5.916a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723H22.21a.5.5 0 0 1-.5-.5ZM8.952 20.825a4.229 4.229 0 0 0 0 8.458h1.415a1 1 0 1 0 0-2H8.952a2.229 2.229 0 0 1 0-4.458h1.415a1 1 0 1 0 0-2H8.952Zm6.971 0a2.614 2.614 0 0 0-.3 5.212c.06.011.122.017.185.017h1.535a.614.614 0 0 1-.005 1.229h-3.03a1 1 0 1 0 0 2h3.03a2.614 2.614 0 0 0 .073-5.229H15.918a.614.614 0 0 1 .005-1.229h3.03a1 1 0 1 0 0-2h-3.03Zm5.97 2.615a2.614 2.614 0 0 1 2.615-2.615h3.03a1 1 0 1 1 0 2h-3.03a.614.614 0 0 0-.005 1.23H25.996a2.615 2.615 0 0 1-.073 5.229h-3.03a1 1 0 0 1 0-2.001h3.03a.614.614 0 0 0 .005-1.229h-1.535a1.01 1.01 0 0 1-.185-.017 2.615 2.615 0 0 1-2.314-2.597Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FileCssFill.displayName = "FileCssFill"

export default FileCssFill
