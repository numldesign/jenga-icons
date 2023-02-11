
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SimCardFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M25.979 28.283H7.94a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.61a1 1 0 0 1 .707.293l6.428 6.427a1 1 0 0 1 .293.707v15.573a1 1 0 0 1-1 1ZM22.97 14.259H10.95a1 1 0 0 0-1 1v4.464a1.014 1.014 0 0 0 0 .09v4.463a1 1 0 0 0 1 1H22.97a1 1 0 0 0 1-1v-9.017a1 1 0 0 0-1-1Zm-11.021 2v2.509h4.01v-2.509h-4.01Zm0 7.017v-2.508h4.01v2.508h-4.01Zm10.021 0H17.96v-2.508h4.011v2.508Zm-4.011-4.508h4.011v-2.509H17.96v2.509Z" fill="#1C1B1F"/></svg>
    });

    SimCardFill.displayName = "SimCardFill";

    export default SimCardFill;
    