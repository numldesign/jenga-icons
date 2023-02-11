
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberSquareSevenFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm8.01 5a1 1 0 1 0 0 2h4.605l-3.458 10.692a1 1 0 0 0 1.903.616l3.881-12a1 1 0 0 0-.951-1.308h-5.98Z" fill="#1C1B1F"/></svg>
    });

    NumberSquareSevenFill.displayName = "NumberSquareSevenFill";

    export default NumberSquareSevenFill;
    