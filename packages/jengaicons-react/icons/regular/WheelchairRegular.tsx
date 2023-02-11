
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WheelchairRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.802 9.206a2.353 2.353 0 1 0 0-4.706 2.353 2.353 0 0 0 0 4.706ZM19.258 21.441a7.53 7.53 0 1 1-7.515-8h6.588" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.919 9.234v8.535h10.1l3.788 7.373 2.98-1.01" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    WheelchairRegular.displayName = "WheelchairRegular";

    export default WheelchairRegular;
    