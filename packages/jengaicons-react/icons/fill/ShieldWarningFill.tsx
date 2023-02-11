
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ShieldWarningFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M28.384 14.91V5.283a1 1 0 0 0-1-1H6.536c-.553 0-1 .446-1 .998v9.63c0 6.924 3.904 9.508 10.99 13.15a1 1 0 0 0 .876.018c6.908-3.213 10.982-6.069 10.982-13.169ZM16.96 9.805a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1Zm1.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#1C1B1F"/></svg>
    });

    ShieldWarningFill.displayName = "ShieldWarningFill";

    export default ShieldWarningFill;
    