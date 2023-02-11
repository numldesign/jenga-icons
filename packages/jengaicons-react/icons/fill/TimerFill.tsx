
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TimerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M14.19 4.783a1 1 0 1 0 0 2h5.54a1 1 0 1 0 0-2h-5.54Zm2.77 24c5.608 0 10.154-4.546 10.154-10.154S22.568 8.475 16.96 8.475 6.806 13.021 6.806 18.63s4.546 10.154 10.154 10.154Zm5.276-15.43a1 1 0 0 1 0 1.414l-4.569 4.57a1 1 0 0 1-1.414-1.415l4.569-4.569a1 1 0 0 1 1.414 0Z" fill="#1C1B1F"/></svg>
    });

    TimerFill.displayName = "TimerFill";

    export default TimerFill;
    