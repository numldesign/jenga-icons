
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const JeepRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 12.571h24M17.714 16v5.143M14.286 16v5.143" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 17.714a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571ZM22 17.714a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z" fill="#1C1B1F"/><path d="M5.714 12.571h20.572v8.572H5.714V12.57Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M6.958 6.571h18.084l1.458 6h-21l1.458-6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M5.714 21.143v4.285h4.714v-4.285M21.571 21.143v4.285h4.715v-4.285" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    JeepRegular.displayName = "JeepRegular";

    export default JeepRegular;
    