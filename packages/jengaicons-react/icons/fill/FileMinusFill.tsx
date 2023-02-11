
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileMinusFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M7.96 28.283h18a1 1 0 0 0 1-1V11.704a1 1 0 0 0-.291-.705l-6.395-6.422a1 1 0 0 0-.708-.294H7.96a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1Zm5-9a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1ZM20.05 5.5v5.223a.5.5 0 0 0 .5.5h5.227L20.049 5.5Z" fill="#1C1B1F"/></svg>
    });

    FileMinusFill.displayName = "FileMinusFill";

    export default FileMinusFill;
    