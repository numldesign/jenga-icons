
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HandPalmFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M15.802 16.58h-.023a.5.5 0 0 1-.5-.5V8.517c0-.128.008-.255.023-.379V6.552a1.769 1.769 0 0 0-3.537 0v9.527a.5.5 0 0 1-1 0v-.345a.508.508 0 0 1-.004-.069v-5.658c0-.855-.493-1.596-1.21-1.953a2.268 2.268 0 0 0-2.823 2.2v9.619c0 4.92 4.028 8.91 8.997 8.91a9.008 9.008 0 0 0 7.954-4.74l3.265-6.126a2.269 2.269 0 0 0-4.043-2.059l-1.617 3.148a.496.496 0 0 1-.684.212c-.944.056-1.82.492-2.479 1.122C17.41 21.02 17 21.884 17 22.657a.5.5 0 1 1-1 0c0-1.109.573-2.218 1.43-3.04.76-.726 1.778-1.263 2.91-1.38V8.651a2.27 2.27 0 0 0-1.395-2.094 2.052 2.052 0 0 0-2.642 1.649v7.872a.5.5 0 0 1-.5.5Z" fill="#1C1B1F"/></svg>
    });

    HandPalmFill.displayName = "HandPalmFill";

    export default HandPalmFill;
    