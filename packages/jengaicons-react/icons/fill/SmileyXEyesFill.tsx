
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SmileyXEyesFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12ZM14.667 13.49a1 1 0 0 0-1.414-1.414l-1.293 1.293-1.293-1.293a1 1 0 1 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414l-1.293-1.293 1.293-1.293Zm10 0a1 1 0 0 0-1.414-1.414l-1.293 1.293-1.293-1.293a1 1 0 1 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414l1.293-1.293 1.293 1.293a1 1 0 0 0 1.414-1.414l-1.293-1.293 1.293-1.293Zm-6.207 9.793a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#1C1B1F"/></svg>
    });

    SmileyXEyesFill.displayName = "SmileyXEyesFill";

    export default SmileyXEyesFill;
    