
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileSearchFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M25.96 28.283h-18a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.606a1 1 0 0 1 .709.294L26.669 11a1 1 0 0 1 .291.705v15.579a1 1 0 0 1-1 1Zm-6.024-16.914v-5.72l5.725 5.72h-5.725Zm-5.977 7.414a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm2.5-4.5a4.5 4.5 0 1 0 2.396 8.31l1.372 1.372a1 1 0 0 0 1.414-1.414l-1.372-1.372a4.5 4.5 0 0 0-3.81-6.896Z" fill="#1C1B1F"/></svg>
    });

    FileSearchFill.displayName = "FileSearchFill";

    export default FileSearchFill;
    