
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GitDiffFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.96 8.783c0 1.44-.869 2.676-2.11 3.213.029.095.045.195.045.298v6.808l4.065 4.558v-3.377a1 1 0 1 1 2 0v5.973a.998.998 0 0 1-1.01 1.027H8.96a1 1 0 0 1 0-2h3.768l-4.58-5.134a1 1 0 0 1-.253-.665v-7.19l.001-.056a3.501 3.501 0 1 1 4.064-3.455Zm17 15a3.5 3.5 0 1 1-4.893-3.212 1.004 1.004 0 0 1-.042-.288v-6.82L19.96 8.906v3.377a1 1 0 0 1-2 0V6.31a.998.998 0 0 1 1-1.027h6a1 1 0 0 1 0 2h-3.768l4.58 5.134a1 1 0 0 1 .253.665V20.328a3.501 3.501 0 0 1 2.935 3.455Z" fill="#1C1B1F"/></svg>
    });

    GitDiffFill.displayName = "GitDiffFill";

    export default GitDiffFill;
    