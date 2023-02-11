
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ProhibitInsetRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S4 9.373 4 16c0 6.628 5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeMiterlimit="10"/><path d="m12.464 12.465 7.071 7.071" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ProhibitInsetRegular.displayName = "ProhibitInsetRegular";

    export default ProhibitInsetRegular;
    