
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const LinkSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m11.632 20.367 8.736-8.735M18.183 22.552l-3.64 3.64a6.177 6.177 0 0 1-8.735-8.736l3.64-3.64M22.552 18.183l3.64-3.64a6.177 6.177 0 0 0-8.736-8.735l-3.64 3.64" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    LinkSimpleRegular.displayName = "LinkSimpleRegular";

    export default LinkSimpleRegular;
    