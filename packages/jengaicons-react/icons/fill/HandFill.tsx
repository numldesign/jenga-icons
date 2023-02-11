
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HandFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M18.118 16.58h.022a.5.5 0 0 0 .5-.5V8.517c0-.128-.007-.255-.022-.379V6.552a1.769 1.769 0 0 1 3.537 0v9.527a.5.5 0 0 0 1 0v-.345a.507.507 0 0 0 .004-.069v-5.658c0-.855.493-1.596 1.21-1.953a2.273 2.273 0 0 1 2.823 2.2v9.619c0 4.92-4.028 8.91-8.997 8.91a9.008 9.008 0 0 1-7.954-4.74l-3.265-6.126a2.269 2.269 0 0 1 4.043-2.059l1.617 3.148a.496.496 0 0 0 .684.212c.944.056 1.82.492 2.479 1.122.711.681 1.122 1.544 1.122 2.317a.5.5 0 1 0 1 0c0-1.109-.573-2.218-1.43-3.04-.76-.726-1.778-1.263-2.91-1.38V8.651a2.27 2.27 0 0 1 1.395-2.094 2.053 2.053 0 0 1 2.642 1.65v7.871a.5.5 0 0 0 .5.5Z" fill="#1C1B1F"/></svg>
    });

    HandFill.displayName = "HandFill";

    export default HandFill;
    