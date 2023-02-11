
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CoffeeRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.461 4.923v3.692M14.154 4.923v3.692M17.846 4.923v3.692M4 27.077h20.308M9.919 27.077A10.155 10.155 0 0 1 4 17.846v-5.539h20.308v5.539a10.155 10.155 0 0 1-5.92 9.231" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M24.308 12.307A3.692 3.692 0 0 1 28 16v.923a3.692 3.692 0 0 1-3.692 3.692h-.39" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CoffeeRegular.displayName = "CoffeeRegular";

    export default CoffeeRegular;
    