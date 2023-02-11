
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FingerprintFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7.895 23.236a15.493 15.493 0 0 0 1.618-6.917 7.764 7.764 0 0 1 2.917-6.072m4.862 6.072a23.231 23.231 0 0 1-2.914 11.301m-.975-11.3a3.89 3.89 0 0 1 7.778 0 27.12 27.12 0 0 1-2.585 11.595m9.703-4.79c.44-2.242.662-4.521.661-6.806a11.668 11.668 0 0 0-23.336 0 11.65 11.65 0 0 1-.664 3.89m8.054 0a19.318 19.318 0 0 1-2.202 5.814M16.32 8.601a7.785 7.785 0 0 1 8.75 7.718c0 1.3-.08 2.6-.24 3.89m-.74 3.889c-.185.719-.395 1.428-.63 2.127" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FingerprintFill.displayName = "FingerprintFill";

    export default FingerprintFill;
    