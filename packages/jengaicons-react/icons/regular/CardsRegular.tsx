
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CardsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 10h20v16H4V10Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M8 6h20v16" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CardsRegular.displayName = "CardsRegular";

    export default CardsRegular;
    