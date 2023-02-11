
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowSquareRightsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-20Zm16 12a.997.997 0 0 0-.298-.713l-4.237-4.237a1 1 0 1 0-1.415 1.414l2.536 2.536H11.96a1 1 0 1 0 0 2h7.586l-2.536 2.535a1 1 0 0 0 1.415 1.415l4.242-4.243a.999.999 0 0 0 .293-.707Z" fill="#1C1B1F"/></svg>
    });

    ArrowSquareRightsvgFill.displayName = "ArrowSquareRightsvgFill";

    export default ArrowSquareRightsvgFill;
    