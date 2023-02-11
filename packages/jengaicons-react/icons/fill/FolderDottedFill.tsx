
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderDottedFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 5.987a1 1 0 0 0-1 1V12.283a1 1 0 0 0 2 0v-1h17a1 1 0 0 0 0-2h-4a.998.998 0 0 0-.761.351L14.845 6.28a1 1 0 0 0-.708-.293H4.96Zm22 3.296a1 1 0 1 0 0 2h1v1a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1h-2Zm-21 7a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Zm24 0a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0v-4Zm-24 8a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1v-1Zm24 0a1 1 0 0 0-2 0v1h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-2Zm-19 1a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Zm8 0a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Z" fill="#1C1B1F"/></svg>
    });

    FolderDottedFill.displayName = "FolderDottedFill";

    export default FolderDottedFill;
    