
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const KeyboardFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.96 7.975a1 1 0 0 0-1 1v14.616a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.975a1 1 0 0 0-1-1h-22Zm2.692 3.616a1 1 0 1 0 0 2h16.616a1 1 0 1 0 0-2H8.652Zm0 3.692a1 1 0 1 0 0 2h16.616a1 1 0 1 0 0-2H8.652Zm-1 4.692a1 1 0 0 1 1-1h.923a1 1 0 1 1 0 2h-.923a1 1 0 0 1-1-1Zm5.616-1a1 1 0 1 0 0 2h7.384a1 1 0 1 0 0-2h-7.384Zm10.077 1a1 1 0 0 1 1-1h.923a1 1 0 1 1 0 2h-.923a1 1 0 0 1-1-1Z" fill="#1C1B1F"/></svg>
    });

    KeyboardFill.displayName = "KeyboardFill";

    export default KeyboardFill;
    