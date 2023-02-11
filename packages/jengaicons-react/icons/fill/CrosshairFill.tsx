
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CrosshairFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M17.96 4.283a1 1 0 0 0-2 0V5.55a10.78 10.78 0 0 0-9.732 9.732H4.96a1 1 0 1 0 0 2h1.268a10.78 10.78 0 0 0 9.732 9.732v1.268a1 1 0 1 0 2 0v-1.268a10.78 10.78 0 0 0 9.732-9.732h1.268a1 1 0 1 0 0-2h-1.268A10.78 10.78 0 0 0 17.96 5.55V4.283Zm6.556 11h1.165A8.781 8.781 0 0 0 17.96 7.56v1.166a1 1 0 0 1-2 0V7.561a8.781 8.781 0 0 0-7.722 7.722h1.166a1 1 0 1 1 0 2H8.238a8.782 8.782 0 0 0 7.722 7.721v-1.166a1 1 0 0 1 2 0v1.166a8.781 8.781 0 0 0 7.721-7.721h-1.165a1 1 0 1 1 0-2Zm-4 1a3.556 3.556 0 1 1-7.112 0 3.556 3.556 0 0 1 7.111 0Z" fill="#1C1B1F"/></svg>
    });

    CrosshairFill.displayName = "CrosshairFill";

    export default CrosshairFill;
    