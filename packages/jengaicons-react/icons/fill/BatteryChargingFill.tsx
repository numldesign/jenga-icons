
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BatteryChargingFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 9.428a1 1 0 0 1 1-1h18.073a1 1 0 0 1 1 1v13.71a1 1 0 0 1-1 1H5.96a1 1 0 0 1-1-1V9.427Zm10.492 1.451a1 1 0 0 1 .554 1.301l-1.226 3.047h2.023a1 1 0 0 1 .933 1.36l-1.725 4.474a1 1 0 0 1-1.866-.72l1.2-3.114H13.3a1 1 0 0 1-.927-1.373l1.778-4.42a1 1 0 0 1 1.302-.555Zm14.508 1.913a1 1 0 0 0-2 0v6.982a1 1 0 1 0 2 0v-6.982Z" fill="#1C1B1F"/></svg>
    });

    BatteryChargingFill.displayName = "BatteryChargingFill";

    export default BatteryChargingFill;
    