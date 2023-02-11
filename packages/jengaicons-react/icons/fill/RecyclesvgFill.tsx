
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RecyclesvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m19.96 29.283-3-3.001 3-2.999M25.289 9.682l-1.1 4.099-4.096-1.099M10.83 17.88l-1.1-4.1-4.097 1.1" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.96 26.282h10.997a2 2 0 0 0 1.731-3.002l-2.994-5.172M9.73 13.78l-5.498 9.5a2 2 0 0 0 1.731 3.002h5.997M24.19 13.78 18.69 4.282a2 2 0 0 0-3.462 0l-2.994 5.172" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    RecyclesvgFill.displayName = "RecyclesvgFill";

    export default RecyclesvgFill;
    