
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RobotRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M18.5 23.269h-5M16 10.143V6.4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 8.272a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z" fill="#1C1B1F"/><rect x="4" y="10.143" width="24" height="17.752" rx="5" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    RobotRegular.displayName = "RobotRegular";

    export default RobotRegular;
    