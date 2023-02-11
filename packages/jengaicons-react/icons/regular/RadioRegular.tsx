
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RadioRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 15h4M8 19h4M8 23h4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 11h24v16H4zM7.497 7h17.006v4H7.497z"/></svg>
    });

    RadioRegular.displayName = "RadioRegular";

    export default RadioRegular;
    