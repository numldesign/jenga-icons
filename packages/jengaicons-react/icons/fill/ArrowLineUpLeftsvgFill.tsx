
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowLineUpLeftsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M26.96 26.283h-20M15.96 6.283h-6v6M23.96 20.283l-14-14" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowLineUpLeftsvgFill.displayName = "ArrowLineUpLeftsvgFill";

    export default ArrowLineUpLeftsvgFill;
    