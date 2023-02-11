
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HourglassSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m13.875 16.5-1.752-1.192A10 10 0 0 1 7.75 7.04V4.5h16.5v2.54a10 10 0 0 1-4.373 8.268L18.125 16.5M13.875 16.5l-1.752 1.192A10 10 0 0 0 7.75 25.96V28.5h16.5v-2.54a10 10 0 0 0-4.373-8.268L18.125 16.5" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    HourglassSimpleRegular.displayName = "HourglassSimpleRegular";

    export default HourglassSimpleRegular;
    