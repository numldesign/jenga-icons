
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const IntersectFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M13.268 5.283a7.308 7.308 0 0 0-1.918 14.361 9.308 9.308 0 0 1 8.971-8.97 7.31 7.31 0 0 0-7.053-5.391ZM3.96 12.591c0 4.54 3.25 8.32 7.55 9.142a9.308 9.308 0 0 0 18.45-1.757c0-4.54-3.25-8.321-7.55-9.143A9.308 9.308 0 0 0 3.96 12.59Zm24 7.384a7.31 7.31 0 0 0-5.39-7.053 9.308 9.308 0 0 1-8.971 8.97 7.308 7.308 0 0 0 14.361-1.917Z" fill="#1C1B1F"/></svg>
    });

    IntersectFill.displayName = "IntersectFill";

    export default IntersectFill;
    