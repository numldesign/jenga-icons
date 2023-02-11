
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const KeyholeFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12ZM14.45 13.82a2.51 2.51 0 1 1 3.762 2.176 1 1 0 0 0-.451 1.176l1.331 4.085h-4.265l1.332-4.085a1 1 0 0 0-.451-1.176 2.509 2.509 0 0 1-1.258-2.176Zm2.51-4.51a4.51 4.51 0 0 0-2.93 7.939L12.5 21.947a1 1 0 0 0 .95 1.31h7.021a1 1 0 0 0 .95-1.31l-1.53-4.698a4.51 4.51 0 0 0-2.93-7.94Z" fill="#1C1B1F"/></svg>
    });

    KeyholeFill.displayName = "KeyholeFill";

    export default KeyholeFill;
    