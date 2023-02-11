
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileJsFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.39 21.749v4.605a1.93 1.93 0 0 1-1.929 1.929v0a1.93 1.93 0 0 1-1.93-1.93v-.27M18.743 21.749h-3.065c-.902 0-1.634.731-1.634 1.634v0c0 .902.732 1.633 1.634 1.633h1.505M15.561 25.016h1.548c.902 0 1.634.731 1.634 1.633v0c0 .903-.732 1.634-1.634 1.634h-3.065" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z" fill="#1C1B1F"/><path d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.05 11.224V4.41l6.818 6.813h-6.819Z" fill="#fff" stroke="#1C1B1F" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FileJsFill.displayName = "FileJsFill";

    export default FileJsFill;
    