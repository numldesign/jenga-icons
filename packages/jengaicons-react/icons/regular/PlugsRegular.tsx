
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PlugsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7.728 24.254 4 27.982M11.455 17.331l2.663-2.662M17.313 17.864l-2.662 2.662M16.78 22.657 9.326 15.2" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.26 22.756a2 2 0 0 1 0-2.829l3.901-3.9 5.902 5.902-3.9 3.9a2 2 0 0 1-2.83 0L6.26 22.756Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M24.272 7.746 28 4.018M22.675 16.799l-7.456-7.456" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.774 6.278a2 2 0 0 0-2.828 0l-3.901 3.901 5.902 5.902 3.9-3.9a2 2 0 0 0 0-2.83l-3.073-3.073Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    PlugsRegular.displayName = "PlugsRegular";

    export default PlugsRegular;
    