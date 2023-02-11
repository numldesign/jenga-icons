
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ThermometerHotRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.34 25.073a2.143 2.143 0 1 0 0-4.287 2.143 2.143 0 0 0 0 4.287ZM12.34 20.787V7.929M25.23 11.357a2.143 2.143 0 0 1-3.031 0 2.143 2.143 0 0 0-3.033 0M25.23 15.643a2.145 2.145 0 0 1-3.031 0 2.145 2.145 0 0 0-3.033 0M9.219 17.952V7.363c0-1.581 1.395-2.863 3.116-2.863s3.116 1.282 3.116 2.863v10.589" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.222 17.958a5.732 5.732 0 1 0 6.239 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    ThermometerHotRegular.displayName = "ThermometerHotRegular";

    export default ThermometerHotRegular;
    