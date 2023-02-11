
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberSixFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m11.91 17.533 6.717-11.25" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16.96" cy="20.45" r="5.833" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    NumberSixFill.displayName = "NumberSixFill";

    export default NumberSixFill;
    