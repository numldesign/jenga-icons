
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArticleMediumFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.778 9.783H4.96a1 1 0 1 1 0-2h1.796a1 1 0 0 1 .872.472l3.524 5.668 3.594-5.675a1 1 0 0 1 .88-.465h1.778a1 1 0 1 1 0 2h-.813v6.889h.37a1 1 0 1 1 0 2h-2.667a1 1 0 0 1 0-2h.297v-4.44l-2.602 4.108a1 1 0 0 1-1.694-.007l-2.517-4.048v4.387h.293a1 1 0 1 1 0 2H5.404a1 1 0 0 1 0-2h.374V9.783Zm14.182 4.333a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Zm1 2.556a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8ZM9.293 21.227a1 1 0 0 1 1-1H28.96a1 1 0 1 1 0 2H10.293a1 1 0 0 1-1-1Zm1 2.556a1 1 0 0 0 0 2H28.96a1 1 0 1 0 0-2H10.293Z" fill="#1C1B1F"/></svg>
    });

    ArticleMediumFill.displayName = "ArticleMediumFill";

    export default ArticleMediumFill;
    