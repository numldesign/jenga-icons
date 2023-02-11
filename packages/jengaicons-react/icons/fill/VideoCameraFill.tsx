
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const VideoCameraFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.46 9.497a.5.5 0 0 0-.5.5v9.072a5 5 0 0 0 5 5h12.5a.5.5 0 0 0 .5-.5V17.85a.5.5 0 0 0 .232.416l5 3.172a.5.5 0 0 0 .768-.422v-8.468a.5.5 0 0 0-.768-.422l-5 3.171a.5.5 0 0 0-.232.417v-1.218a5 5 0 0 0-5-5H5.46Z" fill="#1C1B1F"/></svg>
    });

    VideoCameraFill.displayName = "VideoCameraFill";

    export default VideoCameraFill;
    