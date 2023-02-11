
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SwapFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M20.01 5.59a1 1 0 0 0 0 1.415l2.536 2.535H8.96a1 1 0 0 0 0 2h13.586l-2.536 2.536a1 1 0 0 0 1.414 1.414l4.243-4.242a.997.997 0 0 0-.01-1.424L21.425 5.59a1 1 0 0 0-1.414 0Zm-6.1 11.9a1 1 0 1 0-1.415-1.414l-4.233 4.233a1.008 1.008 0 0 0-.302.716.997.997 0 0 0 .293.708l4.242 4.242a1 1 0 1 0 1.415-1.414l-2.536-2.535H24.96a1 1 0 0 0 0-2H11.374l2.536-2.536Z" fill="#1C1B1F"/></svg>
    });

    SwapFill.displayName = "SwapFill";

    export default SwapFill;
    