
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PerspectiveFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 15.533a1 1 0 1 0 0 2v-2Zm0 2h1.714v-2H4.96v2ZM28.96 17.533a1 1 0 0 0 0-2v2Zm-1.714 0h1.714v-2h-1.714v2Z" fill="#1C1B1F"/><path fillRule="evenodd" clip-rule="evenodd" d="M7.47 10.367a1 1 0 0 0-.796.979v4.187h20.572V7.477a1 1 0 0 0-1.204-.979L7.47 10.368Zm19.776 7.166H6.674v4.187a1 1 0 0 0 .796.979l18.572 3.869a1 1 0 0 0 1.204-.98v-8.055Z" fill="#1C1B1F"/></svg>
    });

    PerspectiveFill.displayName = "PerspectiveFill";

    export default PerspectiveFill;
    