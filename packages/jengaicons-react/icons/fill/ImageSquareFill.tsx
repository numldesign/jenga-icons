
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ImageSquareFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M3.96 4.783a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-24Zm2 16.773 5.353-6.424a.5.5 0 0 1 .769 0l5.881 7.058a.5.5 0 0 0 .768 0l3.737-4.484a.5.5 0 0 1 .768 0l4.724 5.669V5.783h-22v15.773Zm14.5-7.173c.828 0 1.5-.806 1.5-1.8s-.672-1.8-1.5-1.8c-.829 0-1.5.806-1.5 1.8s.671 1.8 1.5 1.8Z" fill="#1C1B1F"/></svg>
    });

    ImageSquareFill.displayName = "ImageSquareFill";

    export default ImageSquareFill;
    