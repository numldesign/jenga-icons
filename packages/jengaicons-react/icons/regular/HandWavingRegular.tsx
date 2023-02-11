
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HandWavingRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.203 28.5a12.809 12.809 0 0 1-3.8-4.135M21.101 4.5a5.968 5.968 0 0 1 5.17 2.986" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m12.16 17.451-4.288-7.425a2.041 2.041 0 0 1 .748-2.789v0a2.041 2.041 0 0 1 2.788.747l4.287 7.426" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="m12.16 17.451-2.622-4.54a2.041 2.041 0 0 0-3.536 2.042l4.328 7.496c2.214 3.835 7.149 5.131 11.022 2.896a8.106 8.106 0 0 0 4.065-7.274l-.212-6.243a2.041 2.041 0 1 0-4.077.215l.135 2.745c.028.582-.745.81-1.036.305L15.889 7.58a2.042 2.042 0 0 0-3.536 2.042l3.342 5.789" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.333 19.732c-.847-1.466-.055-3.509 1.768-4.562" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    HandWavingRegular.displayName = "HandWavingRegular";

    export default HandWavingRegular;
    