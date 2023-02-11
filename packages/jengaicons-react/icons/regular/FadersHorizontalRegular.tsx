
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FadersHorizontalRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M17.09 22.5H4M28 22.5h-6.545M8.364 10.5H4M28 10.5H12.727M12.727 7.227v6.546M21.455 25.773v-6.546" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FadersHorizontalRegular.displayName = "FadersHorizontalRegular";

    export default FadersHorizontalRegular;
    