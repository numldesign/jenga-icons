
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TelegramLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m12.11 17.495 10.76 9.469a.958.958 0 0 0 1.565-.505l4.501-19.641a.957.957 0 0 0-1.283-1.105L5.567 14.389a.957.957 0 0 0 .163 1.83l6.38 1.276Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m17.483 22.224-3.74 3.74a.958.958 0 0 1-1.634-.678v-7.791" fill="#1C1B1F"/><path d="m17.483 22.224-3.74 3.74a.958.958 0 0 1-1.634-.678v-7.791l5.374 4.729Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m28 6.641-23.5 8.5 7.5 2.5 16-11Z" fill="#1C1B1F"/></svg>
    });

    TelegramLogosvgFill.displayName = "TelegramLogosvgFill";

    export default TelegramLogosvgFill;
    