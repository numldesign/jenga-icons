
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ComputerTowerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M8.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-16Zm4 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm-1 5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Zm6.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#1C1B1F"/></svg>
    });

    ComputerTowerFill.displayName = "ComputerTowerFill";

    export default ComputerTowerFill;
    