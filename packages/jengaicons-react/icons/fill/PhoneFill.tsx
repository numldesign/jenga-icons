
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PhoneFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.817 16.368a11.021 11.021 0 0 0 5.103 5.08 1.036 1.036 0 0 0 1.023-.077l3.27-2.182a1.045 1.045 0 0 1 .992-.09l6.12 2.622a1.042 1.042 0 0 1 .627 1.084 6.272 6.272 0 0 1-6.222 5.478 17.77 17.77 0 0 1-17.77-17.77 6.273 6.273 0 0 1 5.478-6.223 1.042 1.042 0 0 1 1.084.627l2.625 6.126a1.044 1.044 0 0 1-.086.984l-2.174 3.321a1.035 1.035 0 0 0-.07 1.02Z" fill="#1C1B1F"/></svg>
    });

    PhoneFill.displayName = "PhoneFill";

    export default PhoneFill;
    