
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MagnifyingGlassRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M14.5 25C20.299 25 25 20.299 25 14.5S20.299 4 14.5 4 4 8.701 4 14.5 8.701 25 14.5 25ZM21.924 21.925 28 28" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    MagnifyingGlassRegular.displayName = "MagnifyingGlassRegular";

    export default MagnifyingGlassRegular;
    