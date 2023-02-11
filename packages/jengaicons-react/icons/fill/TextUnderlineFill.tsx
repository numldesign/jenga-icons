
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TextUnderlineFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.247 7.891a1 1 0 1 0-2 0v6.714a7.713 7.713 0 0 0 15.427 0V7.89a1 1 0 1 0-2 0v6.714a5.713 5.713 0 0 1-11.427 0V7.89ZM7.73 23.675a1 1 0 1 0 0 2h18.462a1 1 0 0 0 0-2H7.729Z" fill="#1C1B1F"/></svg>
    });

    TextUnderlineFill.displayName = "TextUnderlineFill";

    export default TextUnderlineFill;
    