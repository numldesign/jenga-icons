
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileJsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20.998 28H26V11.008L19.021 4H6v11.982" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.09 10.94V4.129l6.818 6.813h-6.819Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.43 21.466v4.605A1.93 1.93 0 0 1 7.5 28v0a1.93 1.93 0 0 1-1.928-1.93v-.27M17.783 21.466h-3.065c-.902 0-1.633.731-1.633 1.633v0c0 .903.73 1.634 1.633 1.634h1.505M14.601 24.733h1.548c.902 0 1.634.731 1.634 1.633v0c0 .903-.732 1.634-1.634 1.634h-3.065" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    FileJsRegular.displayName = "FileJsRegular";

    export default FileJsRegular;
    