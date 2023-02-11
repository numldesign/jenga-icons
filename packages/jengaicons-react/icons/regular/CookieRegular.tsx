
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CookieRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 15.934a11.962 11.962 0 0 1-3.522 8.566c-4.618 4.61-12.163 4.662-16.841.113a12 12 0 0 1 8.435-20.605 1.002 1.002 0 0 1 .976 1.22 4 4 0 0 0 3.857 4.88 1.003 1.003 0 0 1 .995.994 4 4 0 0 0 4.88 3.858 1.002 1.002 0 0 1 1.22.974v0Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 23.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11.5 22.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.5 15.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 17.008a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#1C1B1F"/></svg>
    });

    CookieRegular.displayName = "CookieRegular";

    export default CookieRegular;
    