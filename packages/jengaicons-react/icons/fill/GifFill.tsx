
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GifFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M17.695 9.926V23.64M27.49 16.783h-4.407M12.797 13.988v-1.062a3 3 0 0 0-3-3H7.96a3 3 0 0 0-3 3v7.714a3 3 0 0 0 3 3h1.837a3 3 0 0 0 3-3V17.79H9.92M28.96 9.926h-5.878v13.652" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GifFill.displayName = "GifFill";

    export default GifFill;
    