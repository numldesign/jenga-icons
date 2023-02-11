
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AirplaneTiltRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M25.91 6.144a2.955 2.955 0 0 0-4.18 0l-4.028 4.028L7.016 6.64 4.13 9.526l8.489 5.73-2.65 2.65H6.952L4 20.859l5.386 1.767 1.702 5.321 2.952-2.951v-2.801l2.757-2.758 5.73 8.489 2.888-2.887-3.534-10.686 4.03-4.029a2.955 2.955 0 0 0 0-4.18v0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AirplaneTiltRegular.displayName = "AirplaneTiltRegular";

    export default AirplaneTiltRegular;
    