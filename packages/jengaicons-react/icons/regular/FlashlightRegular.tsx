
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FlashlightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.02 15.254v3.797M8.588 10.081h14.824M11.14 24h9.541M23.412 4H8.588v6.177l2.404 3.573V28h9.796V13.75l2.624-3.573V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FlashlightRegular.displayName = "FlashlightRegular";

    export default FlashlightRegular;
    