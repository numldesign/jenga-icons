
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FigmaLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 12V4h-4a4 4 0 1 0 0 8h4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 20v-8h-4a4 4 0 1 0 0 8h4ZM16 12V4h4a4 4 0 0 1 0 8h-4ZM16 20v4a3.999 3.999 0 1 1-4-4h4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FigmaLogoRegular.displayName = "FigmaLogoRegular";

    export default FigmaLogoRegular;
    