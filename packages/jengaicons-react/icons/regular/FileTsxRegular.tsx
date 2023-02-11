
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileTsxRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m21.698 21.697 4.661 6.216M26.36 21.697l-4.662 6.216M10.303 21.697H5.64M7.972 27.913v-6.216" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.072 21.144h-3.175c-.935 0-1.692.758-1.692 1.693v0c0 .934.757 1.692 1.692 1.692h1.56M14.776 24.529h1.604c.934 0 1.692.757 1.692 1.692v0c0 .934-.758 1.692-1.692 1.692h-3.175" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M4 18.487v-14.4h15.626L28 12.497v5.99" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.707 12.416V4.241l8.183 8.175h-8.183Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FileTsxRegular.displayName = "FileTsxRegular";

    export default FileTsxRegular;
    