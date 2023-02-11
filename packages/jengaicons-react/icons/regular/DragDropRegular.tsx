
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DragDropRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M25.276 13.24V5.346H4.969v20.307h8.177" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke-dasharray="4 4"/><path d="M20.957 16.708V9.666H9.288v11.668h8.02" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m20.275 20.194-2.4-4.157a1.424 1.424 0 0 0-1.946-.521v0a1.424 1.424 0 0 0-.521 1.945l3.23 5.595" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="m23.003 19.22-.907-1.57a1.424 1.424 0 0 0-1.946-.521v0a1.425 1.425 0 0 0-.521 1.946l.906 1.57" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="m16.242 24.604-.285-.493a1.71 1.71 0 0 1 .626-2.335l.74-.427m9.002-2.072-1.282-2.22a1.424 1.424 0 1 0-2.467 1.424l.427.74m3.192-.17c1.591 2.757.92 6.02-2.098 7.762-3.23 1.865-6.335.425-7.926-2.332" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    DragDropRegular.displayName = "DragDropRegular";

    export default DragDropRegular;
    