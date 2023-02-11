
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SpeakerSimpleLowRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M25.998 13.5v6M20.139 27.146V5.854L12.234 12.2h-1.76a4.472 4.472 0 1 0 0 8.944h1.76l7.905 6.001Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    SpeakerSimpleLowRegular.displayName = "SpeakerSimpleLowRegular";

    export default SpeakerSimpleLowRegular;
    