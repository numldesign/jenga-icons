
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const VibrateRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M24.572 11.715v8.57M28 13.428v5.143M7.428 11.715v8.57M4 13.428v5.143" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.857 6.572h10.285v18.857H10.857V6.572Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    VibrateRegular.displayName = "VibrateRegular";

    export default VibrateRegular;
    