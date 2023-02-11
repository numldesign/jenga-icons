
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const OctagonFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M21.794 4.366a.54.54 0 0 1 .38.16l6.631 6.748c.1.103.156.24.155.383l-.083 9.46a.54.54 0 0 1-.16.38l-6.749 6.631a.539.539 0 0 1-.382.155l-9.46-.083a.54.54 0 0 1-.38-.16L5.115 21.29a.54.54 0 0 1-.155-.382l.083-9.46a.54.54 0 0 1 .16-.38l6.748-6.631a.54.54 0 0 1 .383-.155l9.46.083Z" fill="#1C1B1F"/></svg>
    });

    OctagonFill.displayName = "OctagonFill";

    export default OctagonFill;
    