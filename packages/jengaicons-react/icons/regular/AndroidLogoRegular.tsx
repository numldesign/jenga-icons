
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AndroidLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20.154 20.615a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77ZM11.846 20.615a1.385 1.385 0 1 0 0-2.769 1.385 1.385 0 0 0 0 2.77Z" fill="#1C1B1F"/><path d="M4 23.385v-2.64c0-6.631 5.325-12.107 11.958-12.13a12 12 0 0 1 12.042 12v2.77a.923.923 0 0 1-.923.923H4.923A.923.923 0 0 1 4 23.385ZM4.923 7.692l3.585 3.586M27.077 7.692l-3.565 3.565" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AndroidLogoRegular.displayName = "AndroidLogoRegular";

    export default AndroidLogoRegular;
    