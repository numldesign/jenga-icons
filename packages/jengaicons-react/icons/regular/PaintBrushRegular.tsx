
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PaintBrushRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 26.83h8.43a6.09 6.09 0 1 0-6.088-6.09C6.342 24.956 4 26.83 4 26.83Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.82 15.139C17.067 12.109 22.785 5.17 28 5.17c0 5.215-6.939 10.932-9.968 13.18" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.227 12.152a9.882 9.882 0 0 1 3.792 3.792" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PaintBrushRegular.displayName = "PaintBrushRegular";

    export default PaintBrushRegular;
    