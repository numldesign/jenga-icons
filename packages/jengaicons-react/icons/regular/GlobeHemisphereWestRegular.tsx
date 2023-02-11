
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GlobeHemisphereWestRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m7.286 7.958-.397 2.614 1.428 3.85 3.912.931 1.242 2.112h2.111" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m19.37 4.86 1.118 2.11-5.34 4.72h-4.161l-.994 3.105M26.573 21.066l-6.892-3.974-3.726-.372-2.111 4.719 2.856 3.664-.373 2.67" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GlobeHemisphereWestRegular.displayName = "GlobeHemisphereWestRegular";

    export default GlobeHemisphereWestRegular;
    