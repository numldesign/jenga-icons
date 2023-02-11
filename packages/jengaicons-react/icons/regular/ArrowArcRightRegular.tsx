
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowArcRightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 22c0-2.373.69-4.693 1.982-6.667a11.816 11.816 0 0 1 5.279-4.42 11.545 11.545 0 0 1 6.796-.682 11.692 11.692 0 0 1 6.022 3.284l3.921 4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M28 11.515v6h-6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowArcRightRegular.displayName = "ArrowArcRightRegular";

    export default ArrowArcRightRegular;
    