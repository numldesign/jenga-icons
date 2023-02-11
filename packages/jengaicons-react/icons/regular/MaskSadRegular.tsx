
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MaskSadRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M18.262 14a3 3 0 0 0 4.475 0M9.262 14a3 3 0 0 0 4.475 0M19.313 22a5.987 5.987 0 0 0-6.625 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.848 13.29c-.3-3.385-.129-7.183-.042-8.657a.5.5 0 0 1 .65-.442c9.022 2.731 18.044 1.065 21.571-.163.054-.02.104-.011.124.042.108.287.346 1.75-.045 9.22C26.62 22.58 23.397 28 15.59 28 6.1 28 5.23 17.602 4.848 13.29Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    MaskSadRegular.displayName = "MaskSadRegular";

    export default MaskSadRegular;
    