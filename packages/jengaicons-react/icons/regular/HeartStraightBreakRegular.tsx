
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HeartStraightBreakRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m16.7 25.814 9.375-9.376c2.304-2.315 2.64-6.1.463-8.519a6.02 6.02 0 0 0-8.739-.243l-1.76 1.77-1.515-1.527c-2.315-2.303-6.1-2.64-8.52-.463a6.019 6.019 0 0 0-.243 8.74l9.62 9.618a.938.938 0 0 0 1.319 0v0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m16.04 9.447-1.852 2.026 3.704 3.704-1.852 1.852" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    HeartStraightBreakRegular.displayName = "HeartStraightBreakRegular";

    export default HeartStraightBreakRegular;
    