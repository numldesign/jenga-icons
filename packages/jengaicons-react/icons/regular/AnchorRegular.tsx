
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AnchorRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.011 27.503V8.701M16.011 8.7a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7ZM11.31 13.401h9.402M5.67 17.162c.792 4.168 2.334 5.342 6.412 6.016 2.953.357 2.96 1.608 3.784 4.822.913-3.174 1.463-4.425 3.874-4.822 4.356-.697 5.772-2.036 6.59-6.016" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AnchorRegular.displayName = "AnchorRegular";

    export default AnchorRegular;
    