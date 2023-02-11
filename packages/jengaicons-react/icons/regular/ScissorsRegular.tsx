
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ScissorsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7.36 13.12a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM7.36 25.6a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM16.48 16l-6.347 4.343M28 8.118l-8.12 5.556M28 23.882 10.133 11.657" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ScissorsRegular.displayName = "ScissorsRegular";

    export default ScissorsRegular;
    