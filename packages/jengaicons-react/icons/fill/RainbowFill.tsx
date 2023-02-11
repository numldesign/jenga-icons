
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RainbowFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 8.926a13 13 0 0 0-13 13v1.714a1 1 0 1 0 2 0v-1.714a11 11 0 1 1 22 0v1.714a1 1 0 1 0 2 0v-1.714a13 13 0 0 0-13-13Zm-6.768 6.232a9.571 9.571 0 0 1 16.34 6.768v1.714a1 1 0 0 1-2 0v-1.714a7.571 7.571 0 1 0-15.143 0v1.714a1 1 0 0 1-2 0v-1.714a9.571 9.571 0 0 1 2.803-6.768Zm2.424 2.424a6.143 6.143 0 0 1 10.487 4.344v1.714a1 1 0 1 1-2 0v-1.714a4.143 4.143 0 0 0-8.286 0v1.714a1 1 0 1 1-2 0v-1.714c0-1.63.647-3.192 1.8-4.344Z" fill="#1C1B1F"/></svg>
    });

    RainbowFill.displayName = "RainbowFill";

    export default RainbowFill;
    