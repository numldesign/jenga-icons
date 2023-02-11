
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberCircleFiveRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10"/><path d="M19 10.5h-5.02L13 16.525a3.5 3.5 0 1 1 0 4.95" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NumberCircleFiveRegular.displayName = "NumberCircleFiveRegular";

    export default NumberCircleFiveRegular;
    