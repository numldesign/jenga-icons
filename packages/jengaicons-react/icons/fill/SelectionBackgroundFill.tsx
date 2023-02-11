
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SelectionBackgroundFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.505 3.283a1 1 0 0 0-1 1v1.643a1 1 0 1 0 2 0v-.643h1.182a1 1 0 1 0 0-2h-2.182Zm6.546 0a1 1 0 1 0 0 2h4.364a1 1 0 0 0 0-2H18.05Zm8.727 0a1 1 0 1 0 0 2h1.182v1.182a1 1 0 1 0 2 0V4.283a1 1 0 0 0-1-1h-2.182Zm-14.273 5.93a1 1 0 1 0-2 0v1.615H5.96a1 1 0 0 0-1 1v15.455a1 1 0 0 0 1 1h15.455a1 1 0 0 0 1-1v-4.546h1.634a1 1 0 0 0 0-2h-1.634v-8.909a1 1 0 0 0-1-1h-8.91V9.213Zm17.455 1.615a1 1 0 1 0-2 0v4.364a1 1 0 0 0 2 0v-4.364Zm0 8.728a1 1 0 1 0-2 0v1.181h-.637a1 1 0 1 0 0 2h1.637a1 1 0 0 0 1-1v-2.181Z" fill="#1C1B1F"/></svg>
    });

    SelectionBackgroundFill.displayName = "SelectionBackgroundFill";

    export default SelectionBackgroundFill;
    