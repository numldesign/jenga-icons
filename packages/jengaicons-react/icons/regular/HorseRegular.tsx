
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HorseRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M21.545 14.076a5.355 5.355 0 0 1-5.356 5.355" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.05 14.215a1.339 1.339 0 1 0 0-2.678 1.339 1.339 0 0 0 0 2.678Z" fill="#1C1B1F"/><path d="M10.288 24.107c.84.726 1.795 1.324 2.834 1.763m0 0c1.28.541 2.689.841 4.167.841C23.204 26.711 28 21.916 28 16c0-5.915-4.796-10.71-10.711-10.71-.575 0-1.14.044-1.69.132v3.336L4 16l3.277 3.277c3.344-.848 5.38-.799 9.235 0l-3.39 6.593Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    HorseRegular.displayName = "HorseRegular";

    export default HorseRegular;
    