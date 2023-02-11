
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileCsvRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.786 17.456V4h14.602l7.826 7.86v5.596" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.464 11.783v-7.64l7.646 7.64h-7.646Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m21.922 21.507 2.247 6.242a.1.1 0 0 0 .188.003l2.438-6.245M9.42 21.507H8.034a3.246 3.246 0 0 0-3.247 3.246v0A3.246 3.246 0 0 0 8.033 28H9.42M17.988 21.507h-3.01c-.897 0-1.624.727-1.624 1.623v0c0 .897.727 1.623 1.623 1.623h1.473" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M14.85 24.753h1.515c.896 0 1.623.727 1.623 1.624v0c0 .896-.727 1.623-1.623 1.623h-3.011" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    FileCsvRegular.displayName = "FileCsvRegular";

    export default FileCsvRegular;
    