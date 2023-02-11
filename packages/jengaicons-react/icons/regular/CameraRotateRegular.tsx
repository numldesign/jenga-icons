
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CameraRotateRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 26.999H4v-18h5.993l2.027-2.998h8L22.05 9H28v18Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.389 16.25h2.866v-2.867" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.796 14.222a5.255 5.255 0 0 1 7.432 0l2.027 2.027M13.611 19.627h-2.866v2.867" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.204 21.654a5.255 5.255 0 0 1-7.432 0l-2.027-2.027" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CameraRotateRegular.displayName = "CameraRotateRegular";

    export default CameraRotateRegular;
    