
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TranslateFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28.96 26.898 22.5 13.975l-6.462 12.923M17.883 23.206h9.23M12.345 5.667v2.77M4.96 8.437h14.77M16.037 8.437A11.077 11.077 0 0 1 4.96 19.514" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.283 12.13a11.082 11.082 0 0 0 10.445 7.38" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    TranslateFill.displayName = "TranslateFill";

    export default TranslateFill;
    