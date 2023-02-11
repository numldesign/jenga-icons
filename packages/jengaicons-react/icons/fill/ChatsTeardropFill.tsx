
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChatsTeardropFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M13.261 21.824c4.597 0 8.323-3.721 8.323-8.312 0-4.59-3.726-8.312-8.323-8.312A8.315 8.315 0 0 0 4.96 12.92v8.405a.5.5 0 0 0 .5.5h7.801Z" fill="#1C1B1F"/><path d="M12.868 21.983a8.325 8.325 0 0 0 7.79 5.383h8.302V18.46a8.317 8.317 0 0 0-7.595-7.689" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ChatsTeardropFill.displayName = "ChatsTeardropFill";

    export default ChatsTeardropFill;
    