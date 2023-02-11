
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileVueRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M25.841 24.805h-3.108M26.359 27.913h-3.626v-6.216h3.626M4 18.487v-14.4h15.626L28 12.497v5.99" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.707 12.416V4.241l8.183 8.175h-8.183ZM4.736 21.697l2.422 6.216 2.627-6.216" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.52 21.697v4.216a2 2 0 0 1-2 2h-.592a2 2 0 0 1-2-2v-4.216" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    FileVueRegular.displayName = "FileVueRegular";

    export default FileVueRegular;
    