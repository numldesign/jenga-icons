
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GenderMaleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M21.7 4.783a1 1 0 0 1 1-1h6.26a.998.998 0 0 1 1 1.017v6.244a1 1 0 1 1-2 0V7.197l-6.26 6.261a1.02 1.02 0 0 1-.04.037 9.391 9.391 0 1 1-1.412-1.412l.037-.04 6.261-6.26h-3.847a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    GenderMaleFill.displayName = "GenderMaleFill";

    export default GenderMaleFill;
    