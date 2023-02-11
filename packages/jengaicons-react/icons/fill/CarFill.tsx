
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CarFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M24.454 7.283H9.453l-3.75 6.693h22.502l-3.75-6.693ZM5.703 16.029h22.503v5.825H5.703V16.03Zm4.4 1.397a1 1 0 0 0 0 2h1.714a1 1 0 1 0 0-2h-1.714Zm12 0a1 1 0 1 0 0 2h1.714a1 1 0 1 0 0-2h-1.714Zm-11.726 4.428v2.429a1 1 0 0 1-1 1H6.703a1 1 0 0 1-1-1v-2.429h4.674Zm17.828 2.429v-2.429h-4.68v2.429a1 1 0 0 0 1 1h2.68a1 1 0 0 0 1-1Zm.749-8.286h-.715v-2h.715a1 1 0 1 1 0 2Zm-23.286 0h-.715a1 1 0 1 1 0-2h.715v2Z" fill="#1C1B1F"/></svg>
    });

    CarFill.displayName = "CarFill";

    export default CarFill;
    