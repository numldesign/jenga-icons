
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CircleWavyCheckFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="m13.765 6.76 2.492-1.939a1 1 0 0 1 1.25.018l2.312 1.903a1 1 0 0 0 .635.228h4.535a1 1 0 0 1 1 1v3.677a1 1 0 0 0 .187.583l2.338 3.265a1 1 0 0 1-.039 1.216l-2.26 2.761a1 1 0 0 0-.226.633v3.736a1 1 0 0 1-1 1h-4.462a1 1 0 0 0-.728.313l-2.203 2.334a1 1 0 0 1-1.434.02l-2.375-2.374a1 1 0 0 0-.707-.293H9.072a1 1 0 0 1-1-1v-3.723a1 1 0 0 0-.24-.65l-2.35-2.741a1 1 0 0 1-.04-1.25l2.43-3.242a1 1 0 0 0 .2-.6V7.97a1 1 0 0 1 1-1h4.08a1 1 0 0 0 .613-.21Zm7.532 7.77a1 1 0 0 0-1.414-1.414L15.67 17.33l-1.633-1.634a1 1 0 0 0-1.415 1.414l2.341 2.341a1 1 0 0 0 1.414 0l4.92-4.92Z" fill="#1C1B1F"/></svg>
    });

    CircleWavyCheckFill.displayName = "CircleWavyCheckFill";

    export default CircleWavyCheckFill;
    