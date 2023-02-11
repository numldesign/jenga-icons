
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const EqualizerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M22.743 8.435a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1ZM4.96 11.61a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm0 4.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2H4.96Zm8.391-7.348a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 1 0 0-2h-5.217Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm10.392-13.522a1 1 0 1 0 0 2h5.217a1 1 0 1 0 0-2h-5.217Zm0 4.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2h-5.217Zm-1 5.174a1 1 0 0 1 1-1h5.217a1 1 0 1 1 0 2h-5.217a1 1 0 0 1-1-1Zm1 3.174a1 1 0 1 0 0 2h5.217a1 1 0 0 0 0-2h-5.217Z" fill="#1C1B1F"/></svg>
    });

    EqualizerFill.displayName = "EqualizerFill";

    export default EqualizerFill;
    