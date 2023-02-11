
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MessengerLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.17 14.188a12 12 0 0 0 1.47 8.359l-1.185 4.146A1 1 0 0 0 6.69 27.93l4.147-1.185A12 12 0 1 0 5.17 14.188Zm10.501-.477a1 1 0 0 0-1.414 0l-4.002 4.002a1 1 0 0 0 1.414 1.414l3.295-3.294 3.295 3.294a1 1 0 0 0 1.414 0l4.002-4.001a1 1 0 0 0-1.415-1.415l-3.294 3.295-3.295-3.295Z" fill="#1C1B1F"/></svg>
    });

    MessengerLogosvgFill.displayName = "MessengerLogosvgFill";

    export default MessengerLogosvgFill;
    