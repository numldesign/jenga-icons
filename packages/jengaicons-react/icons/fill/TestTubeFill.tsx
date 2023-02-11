
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TestTubeFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M29.667 10.342a1 1 0 0 1-.44 1.67l-2.599.723-12.357 12.357a5.056 5.056 0 0 1-7.15-7.15L21.487 3.575a1 1 0 0 1 1.414 0l6.766 6.766Zm-3.828.536 1.202-.334-4.847-4.847-9.292 9.292c.716.144 1.396.506 2.15.908.522.277 1.08.573 1.709.83.915.374 2.06.228 3.074-.027l5.565-5.565a1 1 0 0 1 .44-.257Z" fill="#1C1B1F"/></svg>
    });

    TestTubeFill.displayName = "TestTubeFill";

    export default TestTubeFill;
    