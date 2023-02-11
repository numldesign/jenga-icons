
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TableFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M3.96 7.283a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-18Zm24 6v5h-15v-5h15Zm-22 0v5h5v-5h-5Zm0 11v-4h5v4h-5Zm7-4v4h15v-4h-15Z" fill="#1C1B1F"/></svg>
    });

    TableFill.displayName = "TableFill";

    export default TableFill;
    