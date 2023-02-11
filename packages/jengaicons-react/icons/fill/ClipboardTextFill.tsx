
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ClipboardTextFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M21.996 6.203h3.564a1 1 0 0 1 1 1v20.08a1 1 0 0 1-1 1H8.36a1 1 0 0 1-1-1V7.203a1 1 0 0 1 1-1h3.565c1-1.745 2.88-2.92 5.035-2.92a5.798 5.798 0 0 1 5.036 2.92Zm-5.036-.92a3.8 3.8 0 0 1 3.8 3.76h-7.6a3.8 3.8 0 0 1 3.8-3.76Zm-4 9a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z" fill="#1C1B1F"/></svg>
    });

    ClipboardTextFill.displayName = "ClipboardTextFill";

    export default ClipboardTextFill;
    