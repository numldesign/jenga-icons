
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MicrophoneFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 4.783a4.615 4.615 0 0 0-4.615 4.615v7.385a4.615 4.615 0 0 0 9.23 0V9.398a4.615 4.615 0 0 0-4.615-4.615Zm-8.368 11.93a1 1 0 0 1 1.105.882 7.309 7.309 0 0 0 7.251 6.496h.024a7.309 7.309 0 0 0 7.251-6.496 1 1 0 1 1 1.988.222 9.309 9.309 0 0 1-8.25 8.22v2.746a1 1 0 0 1-2 0v-2.746a9.309 9.309 0 0 1-8.252-8.22 1 1 0 0 1 .883-1.105Z" fill="#1C1B1F"/></svg>
    });

    MicrophoneFill.displayName = "MicrophoneFill";

    export default MicrophoneFill;
    