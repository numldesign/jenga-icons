
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StarHalfFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M17.01 4.917V22.17" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m9.525 27.648 7.385-5.366V4.917L12.09 13.6H4.96l7.386 5.366-2.821 8.682Z" fill="#1C1B1F"/><path d="m9.525 27.648 7.385-5.366V4.917L12.09 13.6H4.96l7.386 5.366-2.821 8.682Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m17.01 4.917 4.82 8.683h7.13l-7.386 5.366 2.821 8.682-7.385-5.366" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke-dasharray="6 6"/></svg>
    });

    StarHalfFill.displayName = "StarHalfFill";

    export default StarHalfFill;
    