
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ReceiptsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.684 25.921a.5.5 0 0 1-.724-.447V7.283a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v18.19a.5.5 0 0 1-.723.448l-3.053-1.526a.5.5 0 0 0-.447 0l-3.553 1.776a.5.5 0 0 1-.447 0l-3.553-1.776a.5.5 0 0 0-.447 0l-3.553 1.776a.5.5 0 0 1-.447 0l-3.553-1.776a.5.5 0 0 0-.447 0L5.684 25.92ZM9.46 13.283a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Z" fill="#1C1B1F"/></svg>
    });

    ReceiptsvgFill.displayName = "ReceiptsvgFill";

    export default ReceiptsvgFill;
    