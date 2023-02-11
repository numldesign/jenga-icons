
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PersonSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M15.987 10.268a2.884 2.884 0 1 0 0-5.768 2.884 2.884 0 0 0 0 5.768ZM16 14.114v5.768M4.464 16.998S9.27 14.113 16 14.113c6.73 0 11.536 2.885 11.536 2.885" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m8.328 28.5 7.291-8.193a.5.5 0 0 1 .751.005l7.1 8.188" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    PersonSimpleRegular.displayName = "PersonSimpleRegular";

    export default PersonSimpleRegular;
    