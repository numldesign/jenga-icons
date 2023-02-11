
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const KanbanFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M3.96 5.374a1 1 0 0 1 1-1h16.363c.035 0 .069.002.102.005h7.53a1 1 0 0 1 1 1v8.628c.004.031.005.063.005.094v8.738a1 1 0 0 1-1 1h-7.636a1 1 0 0 1-1-1v-3.374h-7.728v6.727a1 1 0 0 1-1 1H4.968a1 1 0 0 1-1-1V14.23a1.011 1.011 0 0 1-.008-.129V5.374Zm7.636 1V13.1H5.96V6.374h5.636Zm2 7.744v3.347h6.727V6.374h-6.727V14.118Zm8.728 7.721v-6.738h5.636v6.738h-5.636Z" fill="#1C1B1F"/></svg>
    });

    KanbanFill.displayName = "KanbanFill";

    export default KanbanFill;
    