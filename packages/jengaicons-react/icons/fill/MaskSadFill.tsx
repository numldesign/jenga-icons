
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MaskSadFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.766 4.916c-.087 1.474-.259 5.271.042 8.657l.006.073C6.2 18.001 7.112 28.283 16.55 28.283c7.807 0 11.03-5.42 11.516-14.71.39-7.47.153-8.934.045-9.22-.02-.054-.07-.061-.124-.042-3.528 1.228-12.549 2.894-21.572.162a.5.5 0 0 0-.649.443Zm5.202 8.7a1 1 0 1 0-1.492 1.333 4.001 4.001 0 0 0 5.967 0 1 1 0 0 0-1.492-1.332 1.998 1.998 0 0 1-2.983 0Zm9 0a1 1 0 0 0-1.492 1.333 4.002 4.002 0 0 0 5.967 0 1 1 0 0 0-1.492-1.332 1.998 1.998 0 0 1-2.983 0Zm-6.874 7.834a6.988 6.988 0 0 1 7.731 0 1 1 0 1 1-1.106 1.666 4.987 4.987 0 0 0-5.519 0 1 1 0 0 1-1.106-1.666Z" fill="#1C1B1F"/></svg>
    });

    MaskSadFill.displayName = "MaskSadFill";

    export default MaskSadFill;
    