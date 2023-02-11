
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WalletsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28.96 9.96v16.783h-24V7.759 9.96h24Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M24.026 5.823H6.96a2 2 0 0 0-2 2V9.96h21.996" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clip-rule="evenodd" d="M28.96 26.743V9.96h-24V7.76v18.984h24Zm-3-4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#1C1B1F"/></svg>
    });

    WalletsvgFill.displayName = "WalletsvgFill";

    export default WalletsvgFill;
    