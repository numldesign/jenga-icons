
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RulerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M22.267 4.99a1 1 0 0 0-1.414 0L18.11 7.733l3.753 3.753A1 1 0 0 1 20.45 12.9l-3.753-3.753-2.75 2.75 3.753 3.753a1 1 0 1 1-1.415 1.415l-3.752-3.753-2.751 2.75 3.753 3.753a1 1 0 0 1-1.414 1.415l-3.753-3.753-2.7 2.7a1 1 0 0 0 0 1.414l5.985 5.985a1 1 0 0 0 1.414 0l15.187-15.187a1 1 0 0 0 0-1.414L22.267 4.99Z" fill="#1C1B1F"/></svg>
    });

    RulerFill.displayName = "RulerFill";

    export default RulerFill;
    