
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BackspaceFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M27.96 7.008H11.231a1 1 0 0 0-.85.474l-5.097 8.233a1 1 0 0 0-.002 1.05l5.1 8.315a1 1 0 0 0 .852.478H27.96a1 1 0 0 0 1-1V8.008a1 1 0 0 0-1-1Zm-5.695 5.694a1 1 0 0 1 0 1.414l-2.07 2.07 2.07 2.071a1 1 0 0 1-1.414 1.415L18.78 17.6l-2.072 2.07a1 1 0 0 1-1.414-1.414l2.071-2.07-2.07-2.071a1 1 0 0 1 1.413-1.414l2.071 2.07 2.07-2.07a1 1 0 0 1 1.415 0Z" fill="#1C1B1F"/></svg>
    });

    BackspaceFill.displayName = "BackspaceFill";

    export default BackspaceFill;
    