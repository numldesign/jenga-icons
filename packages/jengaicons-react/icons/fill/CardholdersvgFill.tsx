
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CardholdersvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 11.283h24" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clip-rule="evenodd" d="M12.957 15.283H4.96v10h24v-10h-8.01c-.027 1.4-1.806 2.53-3.997 2.53-2.19 0-3.97-1.13-3.996-2.53Z" fill="#1C1B1F"/><path d="M4.96 15.283v-1a1 1 0 0 0-1 1h1Zm7.997 0 1-.019a1 1 0 0 0-1-.981v1Zm-7.997 10h-1a1 1 0 0 0 1 1v-1Zm24 0v1a1 1 0 0 0 1-1h-1Zm0-10h1a1 1 0 0 0-1-1v1Zm-8.01 0v-1a1 1 0 0 0-1 .981l1 .019Zm-15.99 1h7.997v-2H4.96v2Zm1 9v-10h-2v10h2Zm23-1h-24v2h24v-2Zm-1-9v10h2v-10h-2Zm-7.01 1h8.01v-2h-8.01v2Zm-1-1.019c-.005.25-.171.615-.722.964-.54.342-1.34.585-2.275.585v2c1.257 0 2.44-.322 3.345-.895.893-.566 1.63-1.466 1.651-2.616l-2-.038Zm-2.997 1.549c-.934 0-1.735-.243-2.274-.585-.552-.349-.718-.714-.722-.964l-2 .038c.022 1.15.758 2.05 1.651 2.616.904.573 2.088.895 3.345.895v-2Z" fill="#1C1B1F"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4.96 7.283h24v18h-24z"/></svg>
    });

    CardholdersvgFill.displayName = "CardholdersvgFill";

    export default CardholdersvgFill;
    