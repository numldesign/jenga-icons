
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CrosshairRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 25.778c5.4 0 9.778-4.378 9.778-9.778S21.4 6.222 16 6.222 6.222 10.6 6.222 16 10.6 25.778 16 25.778ZM16 4v4.444M4 16h4.444M16 28v-4.445M28 16h-4.445" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 19.556a3.556 3.556 0 1 0 0-7.112 3.556 3.556 0 0 0 0 7.112Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CrosshairRegular.displayName = "CrosshairRegular";

    export default CrosshairRegular;
    