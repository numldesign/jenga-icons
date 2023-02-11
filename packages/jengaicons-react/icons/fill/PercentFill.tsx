
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PercentFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M24.667 8.575a1 1 0 0 1 0 1.415l-14 14a1 1 0 0 1-1.415-1.414l14.001-14a1 1 0 0 1 1.414 0ZM11.904 13.95a2.722 2.722 0 1 0 0-5.445 2.722 2.722 0 0 0 0 5.445Zm12.834 7.389a2.722 2.722 0 1 1-5.445 0 2.722 2.722 0 0 1 5.445 0Z" fill="#1C1B1F"/></svg>
    });

    PercentFill.displayName = "PercentFill";

    export default PercentFill;
    