
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ListChecksFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M14.021 8.366a1 1 0 1 0-1.414-1.414L9.53 10.029 8.437 8.936a1 1 0 0 0-1.415 1.414l1.801 1.8a1 1 0 0 0 1.414 0l3.784-3.784Zm2.914.186a1 1 0 1 0 0 2h9.256a1 1 0 1 0 0-2h-9.256Zm0 6.731a1 1 0 1 0 0 2h9.256a1 1 0 1 0 0-2h-9.256Zm-1 7.732a1 1 0 0 1 1-1h9.256a1 1 0 1 1 0 2h-9.256a1 1 0 0 1-1-1Zm-1.914-9.331a1 1 0 0 1 0 1.414l-3.784 3.784a1 1 0 0 1-1.414 0l-1.8-1.8a1 1 0 1 1 1.414-1.414L9.53 16.76l3.077-3.077a1 1 0 0 1 1.415 0Zm0 8.146a1 1 0 1 0-1.414-1.415L9.53 23.493l-1.093-1.094a1 1 0 0 0-1.415 1.414l1.801 1.8a1 1 0 0 0 1.414 0l3.784-3.783Z" fill="#1C1B1F"/></svg>
    });

    ListChecksFill.displayName = "ListChecksFill";

    export default ListChecksFill;
    