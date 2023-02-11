
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StarHalfRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.05 4.635v17.252M15.95 4.635l-4.82 8.682H4l7.386 5.366-2.821 8.682L15.95 22" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m16.05 4.635 4.82 8.682H28l-7.386 5.366 2.821 8.682L16.05 22" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke-dasharray="6 6"/></svg>
    });

    StarHalfRegular.displayName = "StarHalfRegular";

    export default StarHalfRegular;
    