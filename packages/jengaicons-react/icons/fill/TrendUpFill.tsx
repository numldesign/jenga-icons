
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TrendUpFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M29.198 10.297a1 1 0 0 1 .762.972v6.135a1 1 0 0 1-2 0V14.16l-6.054 7.754a1 1 0 0 1-1.433.149l-7.59-6.408-7.262 6.394a1 1 0 0 1-1.322-1.501l7.91-6.963a1 1 0 0 1 1.306-.014l7.454 6.293 5.93-7.596h-4.074a1 1 0 1 1 0-2h6.059c.105-.007.21.002.314.028Z" fill="#1C1B1F"/></svg>
    });

    TrendUpFill.displayName = "TrendUpFill";

    export default TrendUpFill;
    