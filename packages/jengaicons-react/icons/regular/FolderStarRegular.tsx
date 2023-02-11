
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderStarRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 13.016V10H4v16h9.99" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 6h8l4 4H4V6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="m20.27 18.842 1.775-3.82 1.504 3.82 4.451.24-3.338 3.038.992 3.88-3.609-2.256L18.135 26l1.263-3.88L16 19.083l4.27-.241Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FolderStarRegular.displayName = "FolderStarRegular";

    export default FolderStarRegular;
    