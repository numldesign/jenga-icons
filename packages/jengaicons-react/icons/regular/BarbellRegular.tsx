
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BarbellRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.8 16h6.4M26.4 16H28M4 16h1.6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M8.8 8.8h4v14.4h-4zM19.2 8.8h4v14.4h-4zM23.2 11.2h3.2v9.6h-3.2zM5.6 11.2h3.2v9.6H5.6z"/></svg>
    });

    BarbellRegular.displayName = "BarbellRegular";

    export default BarbellRegular;
    