
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WheelchairFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M12.837 9.23a2.353 2.353 0 1 0-1.94.095 1.004 1.004 0 0 0-.018.192v3.404a8.529 8.529 0 1 0 10.337 8.865 1 1 0 0 0-1.996-.125 6.53 6.53 0 1 1-8.341-6.677v3.068a1 1 0 0 0 1 1h9.49l3.508 6.83a1 1 0 0 0 1.21.49l2.98-1.01a1 1 0 0 0-.642-1.894l-2.163.733-3.393-6.606a1 1 0 0 0-.89-.543h-9.1v-2.328h6.412a1 1 0 1 0 0-2H12.88V9.517c0-.1-.015-.197-.042-.288Z" fill="#1C1B1F"/></svg>
    });

    WheelchairFill.displayName = "WheelchairFill";

    export default WheelchairFill;
    