
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const VaultRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M24 23.5v3M8 23.5v3" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.925 16.13a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26ZM7.851 12.527a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.851 15.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.851 18.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 12.527a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 15.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 18.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#1C1B1F"/><path d="M19.925 18.575a4.075 4.075 0 1 0 0-8.15 4.075 4.075 0 0 0 0 8.15Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 5.5h24v18H4v-18Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    VaultRegular.displayName = "VaultRegular";

    export default VaultRegular;
    