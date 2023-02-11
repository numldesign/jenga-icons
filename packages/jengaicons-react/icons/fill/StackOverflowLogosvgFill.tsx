
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StackOverflowLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.748 23.213h10.424M12.66 16.333 22.72 19.03M15.305 9.923l9.03 5.212M19.54 4.424l7.362 7.362" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.537 21.128v6.796a.5.5 0 0 0 .5.5h19.847a.5.5 0 0 0 .5-.5v-6.796" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    StackOverflowLogosvgFill.displayName = "StackOverflowLogosvgFill";

    export default StackOverflowLogosvgFill;
    