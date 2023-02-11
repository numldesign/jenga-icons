
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GlobeHemisphereWestFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 4.283c.938 0 1.852.108 2.728.311l.631 2.322-4.59 4.057h-3.782a1 1 0 0 0-.953.695l-.719 2.247-.247-.06-1.167-3.145.248-3.503a11.953 11.953 0 0 1 7.851-2.924Zm-3.54 10.38-1.194-.284.45-1.406h3.431a1 1 0 0 0 .662-.251l5.34-4.72a1 1 0 0 0 .303-1.011l-.438-1.614c4.123 1.9 6.986 6.068 6.986 10.906 0 1.484-.27 2.906-.762 4.218l-7.065-3.996a1 1 0 0 0-.393-.125l-3.725-.372a1 1 0 0 0-1.013.586l-.068.154h-.931l-.952-1.619a1 1 0 0 0-.63-.465Zm1.619 4.085h-.608a1 1 0 0 1-.862-.493l-1.026-1.744-3.498-.833a1 1 0 0 1-.706-.625l-1.428-3.85a1 1 0 0 1-.06-.419l.077-1.089a11.944 11.944 0 0 0-1.968 6.588c0 6.449 5.087 11.71 11.467 11.988l.205-2.577-2.617-3.357a1 1 0 0 1-.124-1.023l1.148-2.566Zm3.4 9.445a12.005 12.005 0 0 0 8.898-5.88l-7.005-3.964-2.799-.28-1.57 3.512 2.486 3.19a1 1 0 0 1 .208.694l-.218 2.728Z" fill="#1C1B1F"/></svg>
    });

    GlobeHemisphereWestFill.displayName = "GlobeHemisphereWestFill";

    export default GlobeHemisphereWestFill;
    