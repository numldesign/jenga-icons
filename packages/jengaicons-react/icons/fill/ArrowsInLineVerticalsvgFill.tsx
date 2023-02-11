
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowsInLineVerticalsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M26.96 16.283h-20M16.96 19.283v8M12.717 23.526l4.243-4.243 4.243 4.242M12.717 9.04l4.243 4.243 4.243-4.243M16.96 5.283v8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowsInLineVerticalsvgFill.displayName = "ArrowsInLineVerticalsvgFill";

    export default ArrowsInLineVerticalsvgFill;
    