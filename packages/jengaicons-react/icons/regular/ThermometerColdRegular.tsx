
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ThermometerColdRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.228 25.073a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286ZM12.228 20.787v-5.143M22.086 7.929v3.428M18.829 10.297l3.257 1.06M20.072 14.133l2.014-2.776M24.1 14.133l-2.014-2.776M25.343 10.297l-3.257 1.06M9.106 17.952V7.363c0-1.581 1.396-2.863 3.117-2.863 1.72 0 3.116 1.282 3.116 2.863v10.589" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.11 17.958a5.732 5.732 0 1 0 6.239 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    ThermometerColdRegular.displayName = "ThermometerColdRegular";

    export default ThermometerColdRegular;
    