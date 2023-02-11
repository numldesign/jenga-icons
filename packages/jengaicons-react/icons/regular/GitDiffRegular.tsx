
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GitDiffRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M24.5 27a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM14 20v6H8M24 6h-6v6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.935 12.012V19.2L14 26M24.066 20v-7.2L18 6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GitDiffRegular.displayName = "GitDiffRegular";

    export default GitDiffRegular;
    