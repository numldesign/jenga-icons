import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ArticleNyTimesFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M7.401 9.182a1.441 1.441 0 0 0-1.09 2.383 6.467 6.467 0 0 1 2.5-1.46l-.07-.074a44.296 44.296 0 0 0-.548-.58l-.003-.003-.006-.005a.914.914 0 0 0-.094-.06 1.713 1.713 0 0 0-.232-.103 1.475 1.475 0 0 0-.457-.098ZM3.96 10.623c0 1.004.43 1.907 1.114 2.535A6.465 6.465 0 1 0 17.01 17.84a1 1 0 0 0-1.94-.483 4.465 4.465 0 0 1-3.338 3.273l.005-4.981a1 1 0 1 0-2-.003l-.005 4.981a4.465 4.465 0 0 1 .65-8.801l1.098 1.216.68-.612-.68.612c.021.023.041.045.062.065l.115.113.031.03.034.029a3.441 3.441 0 1 0 2.189-6.097 1 1 0 1 0 0 2 1.441 1.441 0 1 1-.886 2.578l-.07-.068c-.13-.145-.878-.975-1.639-1.811-.392-.43-.789-.865-1.106-1.208a15.34 15.34 0 0 0-.694-.723c-.278-.246-.643-.429-.973-.549A3.435 3.435 0 0 0 7.4 7.182c-1.9 0-3.441 1.54-3.441 3.441Zm14.892 3.832a1 1 0 0 1 1-1h9.108a1 1 0 0 1 0 2h-9.108a1 1 0 0 1-1-1Zm0 3.643a1 1 0 0 1 1-1h9.108a1 1 0 0 1 0 2h-9.108a1 1 0 0 1-1-1Zm1 2.643a1 1 0 0 0 0 2h9.108a1 1 0 0 0 0-2h-9.108ZM8.834 25.384a1 1 0 0 1 1-1H28.96a1 1 0 1 1 0 2H9.834a1 1 0 0 1-1-1Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ArticleNyTimesFill.displayName = "ArticleNyTimesFill"

export default ArticleNyTimesFill
