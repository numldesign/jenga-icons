
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BugBeetleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M24.457 17.865H28M4 17.865h3.543M4 21.865h3.806M4 13.865h24M16 17.865v9.138M24.194 21.865H28M7.806 4.997l3 3M24.232 4.997l-3 3" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7.806" y="6.727" width="16.388" height="20.276" rx="8.194" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    BugBeetleRegular.displayName = "BugBeetleRegular";

    export default BugBeetleRegular;
    