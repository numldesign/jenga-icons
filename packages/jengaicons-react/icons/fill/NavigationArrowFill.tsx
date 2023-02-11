
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NavigationArrowFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M27.777 12.075a.5.5 0 0 0-.069-.932L5.85 4.582a.5.5 0 0 0-.622.622l6.56 21.803a.5.5 0 0 0 .93.07l4.757-10.038a.5.5 0 0 1 .239-.238l10.063-4.726Z" fill="#1C1B1F"/></svg>
    });

    NavigationArrowFill.displayName = "NavigationArrowFill";

    export default NavigationArrowFill;
    