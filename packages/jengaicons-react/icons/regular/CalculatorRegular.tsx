
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CalculatorRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#1C1B1F"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M6 4h20v24H6z"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M10 8h12v6H10z"/></svg>
    });

    CalculatorRegular.displayName = "CalculatorRegular";

    export default CalculatorRegular;
    