
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WifiHighRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.911 19.738a5.92 5.92 0 0 1 8.178 0M7.954 15.78a11.513 11.513 0 0 1 16.092 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 11.824a17.101 17.101 0 0 1 24 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 25.094a1.399 1.399 0 1 0 0-2.798 1.399 1.399 0 0 0 0 2.798Z" fill="#1C1B1F"/></svg>
    });

    WifiHighRegular.displayName = "WifiHighRegular";

    export default WifiHighRegular;
    