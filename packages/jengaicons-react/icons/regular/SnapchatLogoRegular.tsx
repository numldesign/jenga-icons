
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SnapchatLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 22.9s5.862-2.71 5.862-11.912a6.138 6.138 0 1 1 12.276 0C22.138 20.189 28 22.9 28 22.9c-1.015.952-3.171.37-4.4 1.047-1.21.666-1.87 2.804-3.24 3.154-1.325.339-2.93-1.207-4.36-1.207-1.43 0-3.035 1.546-4.36 1.207-1.37-.35-2.03-2.488-3.24-3.154-1.229-.676-3.386-.095-4.4-1.047ZM22.722 15.665l2.924-1.17M9.278 15.665l-2.924-1.17" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    SnapchatLogoRegular.displayName = "SnapchatLogoRegular";

    export default SnapchatLogoRegular;
    