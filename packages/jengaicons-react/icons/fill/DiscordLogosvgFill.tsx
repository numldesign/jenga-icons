import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DiscordLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="m13.172 8.627-.623-1.515a.545.545 0 0 0-.68-.309L8.084 8.102a.545.545 0 0 0-.347.367l-3.757 13.28a.53.53 0 0 0 .167.554c1.4 1.165 4.37 3.206 7.169 3.776a.523.523 0 0 0 .549-.248l.794-1.313c.07-.12 0-.273-.136-.3a21.274 21.274 0 0 1-2.223-.566 1.09 1.09 0 1 1 .65-2.079c1.89.591 3.858.885 5.837.871h.015c1.979.014 3.947-.28 5.836-.87a1.09 1.09 0 1 1 .65 2.078c-.699.22-1.408.402-2.124.547a.202.202 0 0 0-.133.303l.154.253.638 1.037a.533.533 0 0 0 .61.235c1.898-.585 5.426-1.958 7.361-3.721a.52.52 0 0 0 .141-.54L25.848 8.463a.545.545 0 0 0-.349-.357l-3.953-1.318a.545.545 0 0 0-.663.28l-.458.949-.196.433a.202.202 0 0 0 .155.282c.973.147 1.935.356 2.88.627a1.09 1.09 0 1 1-.6 2.094 20.815 20.815 0 0 0-5.862-.8h-.014a20.816 20.816 0 0 0-5.862.8 1.09 1.09 0 0 1-.6-2.094c.911-.261 1.838-.465 2.776-.611a.09.09 0 0 0 .07-.121Zm1.321 9.584a1.381 1.381 0 1 1-2.762 0 1.381 1.381 0 0 1 2.762 0Zm7.366 0a1.381 1.381 0 1 1-2.762 0 1.381 1.381 0 0 1 2.762 0Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DiscordLogosvgFill.displayName = "DiscordLogosvgFill";

export default DiscordLogosvgFill;
