
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CpuRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M25.23 13.23H28M25.23 18.77H28M4 13.23h2.77M4 18.77h2.77M18.77 25.23V28M13.23 25.23V28M18.77 4v2.77M13.23 4v2.77" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M6.769 6.769h18.462v18.462H6.769z"/><rect x="12.769" y="12.769" width="6.462" height="6.462" rx=".5" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    CpuRegular.displayName = "CpuRegular";

    export default CpuRegular;
    