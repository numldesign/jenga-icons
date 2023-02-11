
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArchiveBoxRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 12.727v10.91" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 8.364h24V28H4V8.364ZM6.182 4h19.636L28 8.364H4L6.182 4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M11.372 19.008 16 23.636l4.628-4.628" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArchiveBoxRegular.displayName = "ArchiveBoxRegular";

    export default ArchiveBoxRegular;
    