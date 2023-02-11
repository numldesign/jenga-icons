
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const OctagonRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20.834 4.083a.54.54 0 0 1 .38.16l6.631 6.749c.1.102.156.24.155.382l-.083 9.46a.539.539 0 0 1-.16.38l-6.749 6.631a.54.54 0 0 1-.382.155l-9.46-.083a.539.539 0 0 1-.38-.16l-6.631-6.749A.54.54 0 0 1 4 20.626l.083-9.46a.54.54 0 0 1 .16-.38l6.749-6.631A.54.54 0 0 1 11.374 4l9.46.083Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    OctagonRegular.displayName = "OctagonRegular";

    export default OctagonRegular;
    