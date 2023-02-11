
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TextBolderRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M8.188 6.065c0-.036.029-.065.065-.065h8.378a4.674 4.674 0 0 1 0 9.347H8.253a.065.065 0 0 1-.065-.065V6.065ZM8.188 15.425c0-.043.034-.077.077-.077h10.221a5.326 5.326 0 1 1 0 10.652H8.266a.078.078 0 0 1-.078-.078V15.425Z" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    TextBolderRegular.displayName = "TextBolderRegular";

    export default TextBolderRegular;
    