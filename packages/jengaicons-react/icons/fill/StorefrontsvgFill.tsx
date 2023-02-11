
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StorefrontsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M26.942 27.263V18.28H6.978v8.984h19.964Z" fill="#1C1B1F"/><path d="M26.942 27.263V18.28H6.978v8.984h19.964Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M20.883 14.356a3.923 3.923 0 1 1-7.846 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.037 14.356A3.924 3.924 0 0 1 9.19 18.28c-2.2.042-4-1.8-4-4V12.74c0-.734 1.292-6.439 1.812-6.958a2.77 2.77 0 0 1 1.958-.811h16a2.77 2.77 0 0 1 1.958.81c.52.52 1.81 6.225 1.81 6.959v1.538c0 2.2-1.8 4.042-3.999 4a3.923 3.923 0 0 1-3.846-3.923" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    StorefrontsvgFill.displayName = "StorefrontsvgFill";

    export default StorefrontsvgFill;
    