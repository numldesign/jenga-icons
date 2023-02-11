
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BinocularssvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M14.19 12.1h5.54M9.576 25.484a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23ZM24.345 25.484a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.232 7.53 5.618 18.487c1.784-2.675 6.515-5.137 8.51 1.617l.066-12.574c-1.574-.561-2.447-.633-3.962 0ZM23.692 7.53l4.613 10.957c-4.613-5.934-7.893-2.047-8.509 1.617L19.73 7.53c1.574-.561 2.448-.633 3.963 0Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    BinocularssvgFill.displayName = "BinocularssvgFill";

    export default BinocularssvgFill;
    