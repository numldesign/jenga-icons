
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberCircleTwoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round"/><path d="M12.99 11.528a3.26 3.26 0 0 1 6.021 1.731c0 .455-.081.788-.36 1.263C18.374 14.997 12.99 22 12.99 22h6.022" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NumberCircleTwoRegular.displayName = "NumberCircleTwoRegular";

    export default NumberCircleTwoRegular;
    