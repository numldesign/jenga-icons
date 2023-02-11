
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ListPlusFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.73 8.975a1 1 0 0 1 1-1h16.923a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm0 6.154a1 1 0 0 1 1-1h16.923a1 1 0 1 1 0 2H7.729a1 1 0 0 1-1-1Zm1 5.154a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-10Zm12.846 1a1 1 0 0 1 1-1h1.307v-1.308a1 1 0 0 1 2 0v1.308h1.308a1 1 0 1 1 0 2h-1.308v1.308a1 1 0 1 1-2 0v-1.308h-1.307a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    ListPlusFill.displayName = "ListPlusFill";

    export default ListPlusFill;
    