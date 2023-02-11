
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderUserRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 13.016V10H4v16h9.99" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 6h8l4 4H4V6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M22.994 21.994a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M27 26a4.006 4.006 0 0 0-8.013 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FolderUserRegular.displayName = "FolderUserRegular";

    export default FolderUserRegular;
    