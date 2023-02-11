
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BirdFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M26.389 14.475a.5.5 0 0 1 .222-.416l1.724-1.15a.5.5 0 0 0 0-.832l-1.97-1.311a.525.525 0 0 1-.21-.289 5.572 5.572 0 0 0-10.91 1.587v1.967a.5.5 0 0 1-.109.313L5.61 26.252a.5.5 0 0 0 .39.812h10.103a10.285 10.285 0 0 0 10.285-10.286v-2.303Zm-4.715-1.982a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572ZM17.6 17.724a1 1 0 0 1 .128 1.409l-4.285 5.143a1 1 0 1 1-1.537-1.28l4.286-5.144a1 1 0 0 1 1.408-.128Z" fill="#1C1B1F"/></svg>
    });

    BirdFill.displayName = "BirdFill";

    export default BirdFill;
    