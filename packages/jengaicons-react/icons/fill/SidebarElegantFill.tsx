
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SidebarElegantFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.96 6.283v20M28.96 13.493v12.79h-24v-20h15.17" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.695 4.774a.2.2 0 0 1 .38 0l.703 2.162a.2.2 0 0 0 .19.138h2.274a.2.2 0 0 1 .118.362l-1.84 1.336a.2.2 0 0 0-.072.224l.702 2.162a.2.2 0 0 1-.307.224l-1.84-1.337a.2.2 0 0 0-.235 0l-1.84 1.337a.2.2 0 0 1-.307-.224l.702-2.162a.2.2 0 0 0-.072-.224l-1.84-1.336a.2.2 0 0 1 .118-.362h2.274a.2.2 0 0 0 .19-.138l.702-2.162ZM19.215 12.772a.2.2 0 0 1 .38 0l.576 1.771a.2.2 0 0 0 .19.138h1.863a.2.2 0 0 1 .117.362l-1.507 1.095a.2.2 0 0 0-.072.223l.575 1.772a.2.2 0 0 1-.307.224l-1.507-1.095a.2.2 0 0 0-.235 0l-1.507 1.095a.2.2 0 0 1-.308-.224l.576-1.771a.2.2 0 0 0-.073-.224l-1.507-1.095a.2.2 0 0 1 .118-.362h1.862a.2.2 0 0 0 .19-.138l.576-1.771Z" fill="#1C1B1F"/><path d="M12 6.283v20" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fill="#1C1B1F" d="M4.96 6.283H12v20H4.96z"/></svg>
    });

    SidebarElegantFill.displayName = "SidebarElegantFill";

    export default SidebarElegantFill;
    