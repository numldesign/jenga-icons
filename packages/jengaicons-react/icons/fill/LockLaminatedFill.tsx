
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const LockLaminatedFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M15.622 3.09a6 6 0 0 0-6 6v4.242H5.569a1 1 0 0 0-1 1v1.858H29.35v-1.858a1 1 0 0 0-1-1h-4.098V9.09a6 6 0 0 0-6-6h-2.631Zm-4 6a4 4 0 0 1 4-4h2.631a4 4 0 0 1 4 4v4.105H11.622V9.09Zm-7.053 8.735H29.35v2.262H4.57v-2.262Zm0 3.896v2.32H29.35v-2.32H4.57Zm0 5.756v-1.802H29.35v1.802a1 1 0 0 1-1 1H5.57a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    LockLaminatedFill.displayName = "LockLaminatedFill";

    export default LockLaminatedFill;
    