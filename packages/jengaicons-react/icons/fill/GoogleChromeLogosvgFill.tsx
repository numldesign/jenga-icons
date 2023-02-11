
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GoogleChromeLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.96 28.424c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.96 20.924a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.96 11.924h11.125M13.06 18.674 7.498 9.037M20.86 18.674l-5.563 9.638" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GoogleChromeLogosvgFill.displayName = "GoogleChromeLogosvgFill";

    export default GoogleChromeLogosvgFill;
    