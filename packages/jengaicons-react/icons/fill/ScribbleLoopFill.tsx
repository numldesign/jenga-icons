
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ScribbleLoopFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 12.372s3.556-4.978 8.889-4.978c11.555 0 10.666 17.778 0 17.778-7.111 0-7.111-10.667 3.555-10.667 7.111 0 11.556 5.333 11.556 5.333" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ScribbleLoopFill.displayName = "ScribbleLoopFill";

    export default ScribbleLoopFill;
    