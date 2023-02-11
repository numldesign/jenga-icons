
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SidebarBrutalistFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.96 6.283v20" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4.96 6.283h24v20h-24z"/><path d="M12 6.283v20" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fill="#1C1B1F" d="M4.96 6.283H12v20H4.96z"/><path d="M22.837 14.99V12.58a.5.5 0 0 0-.5-.5H16.38a.5.5 0 0 0-.5.5v5.977a.5.5 0 0 0 .5.5h2.253" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><rect x="18.666" y="14.864" width="6.957" height="6.977" rx=".5" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    SidebarBrutalistFill.displayName = "SidebarBrutalistFill";

    export default SidebarBrutalistFill;
    