
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SketchLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.26 12.962h23.432" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m10.895 12.697 4.617-6.05a.5.5 0 0 1 .793-.001l4.657 6.05a.5.5 0 0 1 .066.495l-4.656 11.342a.5.5 0 0 1-.926 0L10.83 13.188a.5.5 0 0 1 .066-.492Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M22.006 6.194H9.95a.5.5 0 0 0-.381.177l-5.28 6.236a.5.5 0 0 0 .018.666L15.833 25.48a.5.5 0 0 0 .733-.007l11.136-12.199a.5.5 0 0 0 .011-.662L22.386 6.37a.5.5 0 0 0-.38-.175Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    SketchLogoRegular.displayName = "SketchLogoRegular";

    export default SketchLogoRegular;
    