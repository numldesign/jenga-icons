
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PushPinSlashRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m10.458 20.997-4.732 4.73M11.642 12.003a4.733 4.733 0 0 0-6.184.441L4 13.901 18.102 28l1.458-1.458a4.73 4.73 0 0 0 .436-6.189M14.858 8.787 19.647 4 28 12.351l-5.002 5M5.382 5.382l21.236 21.236" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PushPinSlashRegular.displayName = "PushPinSlashRegular";

    export default PushPinSlashRegular;
    