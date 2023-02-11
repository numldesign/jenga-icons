
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FilePptFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5ZM6.026 20.187c-.565 0-1.023.458-1.023 1.023V28.283a1 1 0 1 0 2 0v-2.01h1.591a3.043 3.043 0 0 0 0-6.086H6.026Zm2.568 4.086h-1.59v-2.086h1.59a1.043 1.043 0 1 1 0 2.086Zm12.866-2.99a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2h-1.25v6a1 1 0 0 1-2 0v-6h-1.25a1 1 0 0 1-1-1Zm-8.067-.073c0-.565.458-1.023 1.023-1.023h2.568a3.043 3.043 0 1 1 0 6.086h-1.59v2.01a1 1 0 1 1-2 0V21.21Zm2 3.063h1.59a1.043 1.043 0 0 0 0-2.086h-1.59v2.086Z" fill="#1C1B1F"/></svg>
    });

    FilePptFill.displayName = "FilePptFill";

    export default FilePptFill;
    