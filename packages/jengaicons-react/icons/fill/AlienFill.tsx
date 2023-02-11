
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AlienFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 28.283c3.692 0 10.154-8.239 10.154-13.846a10.154 10.154 0 1 0-20.308 0c0 5.607 6.462 13.846 10.154 13.846Zm-3.002-10.467a3.022 3.022 0 0 1-3.026-3.02v-.504c0-.001 0-.003.002-.004a3.022 3.022 0 0 1 3.026 3.02v.504c0 .001 0 .003-.002.004Zm-.004 2.001a2.005 2.005 0 0 0 2.006-2.005v-.503a5.022 5.022 0 0 0-5.022-5.022 2.006 2.006 0 0 0-2.006 2.005v.503a5.022 5.022 0 0 0 5.022 5.022Zm9.028-5.53a3.022 3.022 0 0 0-3.022 3.022v.505l.002.002a3.022 3.022 0 0 0 3.026-3.02v-.504c0-.001 0-.002-.002-.003l-.002-.002h-.002Zm-3.551-.53a5.022 5.022 0 0 1 3.551-1.47 2.006 2.006 0 0 1 2.006 2.005v.503a5.022 5.022 0 0 1-5.023 5.022 2.005 2.005 0 0 1-2.005-2.005v-.503c0-1.332.53-2.61 1.471-3.551Zm-.086 9.83a1 1 0 1 0-1.078-1.685c-.663.425-1.032.533-1.31.533-.277 0-.643-.106-1.301-.53a1 1 0 1 0-1.084 1.68c.772.498 1.534.851 2.387.85.85 0 1.613-.354 2.386-.848Z" fill="#1C1B1F"/></svg>
    });

    AlienFill.displayName = "AlienFill";

    export default AlienFill;
    