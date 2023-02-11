
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FilePdfRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5.071 17.35V4.283h14.18l7.598 7.631v5.436" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.324 11.84V4.423l7.425 7.419h-7.425ZM5.07 25.468h2.475a1.881 1.881 0 0 0 1.88-1.882v0a1.881 1.881 0 0 0-1.88-1.88H5.07v6.532M15.416 21.705h-1.634v6.534h1.634a3.267 3.267 0 0 0 0-6.534ZM26.749 21.726h-3.925v6.53M22.848 25.369h3.355" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FilePdfRegular.displayName = "FilePdfRegular";

    export default FilePdfRegular;
    