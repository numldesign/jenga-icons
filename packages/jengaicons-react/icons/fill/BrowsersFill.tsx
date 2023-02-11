
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BrowsersFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M8.888 5.283a1 1 0 0 0-1 1v3H4.96a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20.073a1 1 0 0 0 1-1v-3h2.927a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1H8.888Zm17.145 16h1.927v-14H9.888v2h15.145a1 1 0 0 1 1 1v11Zm-20.073-10v3h18.073v-3H5.96Z" fill="#1C1B1F"/></svg>
    });

    BrowsersFill.displayName = "BrowsersFill";

    export default BrowsersFill;
    