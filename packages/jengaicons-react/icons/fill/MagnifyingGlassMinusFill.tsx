
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MagnifyingGlassMinusFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M23.557 21.468a10.457 10.457 0 0 0 2.403-6.685c0-5.8-4.701-10.5-10.5-10.5s-10.5 4.7-10.5 10.5c0 5.798 4.701 10.5 10.5 10.5 2.54 0 4.869-.902 6.684-2.403a.96.96 0 0 0 .033.035l6.075 6.075a1 1 0 0 0 1.415-1.414L23.59 21.5a1.054 1.054 0 0 0-.034-.032ZM10.46 14.783a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    MagnifyingGlassMinusFill.displayName = "MagnifyingGlassMinusFill";

    export default MagnifyingGlassMinusFill;
    