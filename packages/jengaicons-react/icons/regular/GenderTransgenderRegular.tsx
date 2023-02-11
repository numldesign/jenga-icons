
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GenderTransgenderRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.348 28.5a8.348 8.348 0 1 0 0-16.696 8.348 8.348 0 0 0 0 16.696ZM18.25 14.25 28 4.5M18.609 7.63l6.26 6.261M21.467 4.5H28v6.533" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GenderTransgenderRegular.displayName = "GenderTransgenderRegular";

    export default GenderTransgenderRegular;
    