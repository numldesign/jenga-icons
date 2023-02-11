
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TextHOneFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M8.73 8.803a1 1 0 1 0-2 0V21.11a1 1 0 1 0 2 0v-5.153h8.666v5.153a1 1 0 1 0 2 0V8.803a1 1 0 1 0-2 0v5.153H8.73V8.803Zm18.461 5.333a1 1 0 0 0-1.537-.843l-2.462 1.568a1 1 0 1 0 1.075 1.686l.924-.588v7.804a1 1 0 1 0 2 0v-9.627Z" fill="#1C1B1F"/></svg>
    });

    TextHOneFill.displayName = "TextHOneFill";

    export default TextHOneFill;
    