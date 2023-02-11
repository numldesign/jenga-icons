
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const YinYangRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M15.96 28.283c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.96 23.783a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.96 11.783a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.96 3.283a1 1 0 1 0 0 2v-2Zm5 7a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2Zm-5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm13 11c0-7.18-5.82-13-13-13v2c6.075 0 11 4.925 11 11h2Zm-13 13c7.18 0 13-5.82 13-13h-2c0 6.075-4.925 11-11 11v2Zm-7-7a7 7 0 0 0 7 7v-2a5 5 0 0 1-5-5h-2Zm7-7a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5v-2Z" fill="#1C1B1F"/></svg>
    });

    YinYangRegular.displayName = "YinYangRegular";

    export default YinYangRegular;
    