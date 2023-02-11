
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SnapchatLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 28.174s5.862-2.711 5.862-11.913a6.138 6.138 0 1 1 12.276 0c0 9.202 5.862 11.913 5.862 11.913-1.015.952-3.171.371-4.4 1.047-1.21.667-1.87 2.805-3.24 3.155-1.325.339-2.93-1.207-4.36-1.207-1.43 0-3.035 1.546-4.36 1.207-1.37-.35-2.03-2.488-3.24-3.154-1.229-.677-3.386-.096-4.4-1.048Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m23.682 20.938 2.924-1.17M10.238 20.938l-2.924-1.17" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    SnapchatLogosvgFill.displayName = "SnapchatLogosvgFill";

    export default SnapchatLogosvgFill;
    