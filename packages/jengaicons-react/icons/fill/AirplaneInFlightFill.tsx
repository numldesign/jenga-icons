
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AirplaneInFlightFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M28.46 19.18H8.96a4 4 0 0 1-4-4v-4.018a.5.5 0 0 1 .5-.5h2.659a.5.5 0 0 1 .406.21l1.476 2.065a.5.5 0 0 0 .407.21h2.541a.5.5 0 0 0 .472-.666l-1.262-3.593a.5.5 0 0 1 .471-.665h2.396a.5.5 0 0 1 .375.169l4.05 4.586a.5.5 0 0 0 .374.169h6.135a3 3 0 0 1 3 3v2.533a.5.5 0 0 1-.5.5ZM9.215 23.343a1 1 0 1 0 0 2h15.49a1 1 0 0 0 0-2H9.215Z" fill="#1C1B1F"/></svg>
    });

    AirplaneInFlightFill.displayName = "AirplaneInFlightFill";

    export default AirplaneInFlightFill;
    