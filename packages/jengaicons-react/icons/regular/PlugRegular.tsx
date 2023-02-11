
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PlugRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.72 21.28 4 28M17.44 8.8l4.8-4.8M28 9.76l-4.8 4.8M27.04 18.4 13.6 4.96" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.94 17.444a2 2 0 0 1 0-2.829l8.167-8.166 10.639 10.639-8.167 8.167a2 2 0 0 1-2.828 0L6.94 17.444Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    PlugRegular.displayName = "PlugRegular";

    export default PlugRegular;
    