
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ResponsiveFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M10.051 4.283h18.911v18.743H10.051z"/><rect x="4.958" y="16.82" width="11.43" height="11.463" rx=".5" fill="#1C1B1F"/><path d="M18.127 8.643h6.615v6.615M7.101 26.283l17.64-17.64" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ResponsiveFill.displayName = "ResponsiveFill";

    export default ResponsiveFill;
    