
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CpuFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M20.729 4.283a1 1 0 1 0-2 0v2.77h-3.538v-2.77a1 1 0 1 0-2 0v2.77H8.729a1 1 0 0 0-1 1v4.46H4.96a1 1 0 1 0 0 2h2.769v3.54H4.96a1 1 0 0 0 0 2h2.769v4.46a1 1 0 0 0 1 1h4.462v2.77a1 1 0 1 0 2 0v-2.77h3.538v2.77a1 1 0 1 0 2 0v-2.77h4.462a1 1 0 0 0 1-1v-4.46h2.77a1 1 0 1 0 0-2h-2.77v-3.54h2.77a1 1 0 1 0 0-2h-2.77v-4.46a1 1 0 0 0-1-1h-4.462v-2.77Zm-8 9.27a1.5 1.5 0 0 1 1.5-1.5h5.462a1.5 1.5 0 0 1 1.5 1.5v5.46a1.5 1.5 0 0 1-1.5 1.5h-5.462a1.5 1.5 0 0 1-1.5-1.5v-5.46Zm2 .5v4.46h4.462v-4.46h-4.462Z" fill="#1C1B1F"/></svg>
    });

    CpuFill.displayName = "CpuFill";

    export default CpuFill;
    