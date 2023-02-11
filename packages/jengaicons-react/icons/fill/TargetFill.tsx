
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TargetFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M29.656 3.576a1 1 0 0 1 0 1.414L17.651 16.996a1 1 0 0 1-1.415-1.414l3.466-3.466a5.003 5.003 0 1 0 2.236 3.887 1 1 0 0 1 1.997-.114 7.003 7.003 0 1 1-2.798-5.208l2.849-2.849a10.994 10.994 0 1 0 2.892 3.712 1 1 0 1 1 1.804-.863 12.993 12.993 0 1 1-3.277-4.268l2.837-2.837a1 1 0 0 1 1.414 0Z" fill="#1C1B1F"/></svg>
    });

    TargetFill.displayName = "TargetFill";

    export default TargetFill;
    