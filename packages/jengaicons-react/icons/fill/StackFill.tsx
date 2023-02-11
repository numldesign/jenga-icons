
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StackFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="m17.216 15.949 9.235-5.496a.5.5 0 0 0-.012-.866L17.204 4.42a.5.5 0 0 0-.488 0L7.481 9.587a.5.5 0 0 0-.011.866l9.235 5.496a.5.5 0 0 0 .51 0Zm-11.35-.36a1 1 0 0 1 1.37-.347l9.724 5.786 9.724-5.786a1 1 0 1 1 1.023 1.718l-10.235 6.091a1 1 0 0 1-1.023 0l-10.235-6.09a1 1 0 0 1-.348-1.371Zm1.37 5.744a1 1 0 0 0-1.022 1.718l10.235 6.091a1 1 0 0 0 1.023 0l10.235-6.09a1 1 0 0 0-1.023-1.72L16.96 27.12l-9.723-5.786Z" fill="#1C1B1F"/></svg>
    });

    StackFill.displayName = "StackFill";

    export default StackFill;
    