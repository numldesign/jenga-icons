
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PenNibStraightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.227 17.479v10.109M16.227 17.479a2.106 2.106 0 1 0 0-4.212 2.106 2.106 0 0 0 0 4.212Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m7.117 15.27 3.223-6.16h11.802l2.741 6.16L16.228 28 7.117 15.27ZM22.125 9.11V4H10.33v5.11" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PenNibStraightRegular.displayName = "PenNibStraightRegular";

    export default PenNibStraightRegular;
    