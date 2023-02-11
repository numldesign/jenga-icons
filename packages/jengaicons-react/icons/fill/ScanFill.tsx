
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ScanFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 3.283a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2h-6Zm18 0a1 1 0 1 0 0 2h5v5a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1h-6Zm-17 19a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5v-5Zm24 0a1 1 0 0 0-2 0v5h-5a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1v-6ZM11.415 9.738a1 1 0 0 0-1 1v11.09a1 1 0 0 0 1 1h11.09a1 1 0 0 0 1-1v-11.09a1 1 0 0 0-1-1h-11.09Z" fill="#1C1B1F"/></svg>
    });

    ScanFill.displayName = "ScanFill";

    export default ScanFill;
    