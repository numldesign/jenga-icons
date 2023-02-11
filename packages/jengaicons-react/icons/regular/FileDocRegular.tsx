
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileDocRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.764 17.484V4h14.631l7.841 7.875v5.609" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.471 11.799V4.144l7.662 7.655H19.47ZM16.345 28c1.566 0 2.836-1.445 2.836-3.227 0-1.782-1.27-3.226-2.836-3.226-1.566 0-2.836 1.444-2.836 3.226S14.78 28 16.345 28ZM4.764 21.542h1.414a3.229 3.229 0 0 1 0 6.458H4.764v-6.458Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M27.236 21.542h-1.414a3.229 3.229 0 0 0-3.23 3.23v0A3.229 3.229 0 0 0 25.823 28h1.414" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    FileDocRegular.displayName = "FileDocRegular";

    export default FileDocRegular;
    