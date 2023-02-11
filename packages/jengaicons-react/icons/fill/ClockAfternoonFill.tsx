
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ClockAfternoonFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 28.783c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12Zm-.383-12.924a.997.997 0 0 1 .38-.076h7.003a1 1 0 0 1 0 2h-4.586l3.243 3.243a1 1 0 0 1-1.414 1.414l-4.95-4.95-.007-.006a.996.996 0 0 1-.286-.698v-.006a.997.997 0 0 1 .617-.921Z" fill="#1C1B1F"/></svg>
    });

    ClockAfternoonFill.displayName = "ClockAfternoonFill";

    export default ClockAfternoonFill;
    