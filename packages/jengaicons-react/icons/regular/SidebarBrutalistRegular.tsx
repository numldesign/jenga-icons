
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SidebarBrutalistRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11 6.5v20" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 6.5h24v20H4z"/><path d="M21.837 14.99V12.58a.5.5 0 0 0-.5-.5H15.38a.5.5 0 0 0-.5.5v5.977a.5.5 0 0 0 .5.5h2.253" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><rect x="17.666" y="14.864" width="6.957" height="6.977" rx=".5" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    SidebarBrutalistRegular.displayName = "SidebarBrutalistRegular";

    export default SidebarBrutalistRegular;
    