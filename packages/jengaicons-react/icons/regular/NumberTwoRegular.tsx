
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberTwoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.982 8.547a5.432 5.432 0 0 1 10.036 2.885c0 .758-.135 1.313-.599 2.104C19.956 14.328 10.982 26 10.982 26h10.036" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NumberTwoRegular.displayName = "NumberTwoRegular";

    export default NumberTwoRegular;
    