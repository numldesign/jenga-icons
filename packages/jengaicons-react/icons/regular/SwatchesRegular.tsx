
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SwatchesRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M8.06 24.915a1.542 1.542 0 1 0 0-3.084 1.542 1.542 0 0 0 0 3.084Z" fill="#1C1B1F"/><path d="M4 4h8.119v19.94a4.06 4.06 0 0 1-8.119 0V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M20.39 19.881H28V28H8.123" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m12.172 15.765 9.713-7.046 4.767 6.572-14.48 10.504-.912.643" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    SwatchesRegular.displayName = "SwatchesRegular";

    export default SwatchesRegular;
    