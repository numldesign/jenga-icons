
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CheckSquareOffsetFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M7.73 6.052a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-9H25.19v16.462h-9a1 1 0 1 0 0 2h10a1 1 0 0 0 1-1V7.052a1 1 0 0 0-1-1H7.729Zm9.937 13.246a1 1 0 0 0-1.414-1.414l-5.447 5.446-2.37-2.37a1 1 0 0 0-1.414 1.415L10.1 25.45a1 1 0 0 0 1.415 0l6.153-6.153Z" fill="#1C1B1F"/></svg>
    });

    CheckSquareOffsetFill.displayName = "CheckSquareOffsetFill";

    export default CheckSquareOffsetFill;
    