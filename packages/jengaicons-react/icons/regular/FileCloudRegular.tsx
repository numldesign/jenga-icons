
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileCloudRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M21.998 28H27V11.008L20.021 4H7v11.982" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.09 10.94V4.129l6.818 6.813h-6.819ZM9.404 22.384c0-.591.097-1.16.276-1.69m0 0A3.716 3.716 0 1 0 8.717 28h5.985C17.628 28 20 25.31 20 22.384a5.298 5.298 0 0 0-10.32-1.69Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FileCloudRegular.displayName = "FileCloudRegular";

    export default FileCloudRegular;
    