
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberSquareOneFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm12.672 6a1 1 0 0 0-1.537-.843l-3.068 1.954a1 1 0 1 0 1.074 1.687l1.531-.975v10.177a1 1 0 0 0 2 0v-12Z" fill="#1C1B1F"/></svg>
    });

    NumberSquareOneFill.displayName = "NumberSquareOneFill";

    export default NumberSquareOneFill;
    