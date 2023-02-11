
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberCircleEightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round"/><path d="M18.75 12.75a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0v0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.25 18.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0v0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NumberCircleEightRegular.displayName = "NumberCircleEightRegular";

    export default NumberCircleEightRegular;
    