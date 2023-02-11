
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileTsxFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.29-.705L22.125 3.56a1 1 0 0 0-.708-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5Zm-6.044 10.72a2.692 2.692 0 0 0-.31 5.367.999.999 0 0 0 .189.018h1.604a.692.692 0 0 1 0 1.384h-3.175a1 1 0 0 0 0 2h3.175a2.692 2.692 0 0 0 .077-5.385h-1.56a.692.692 0 1 1 0-1.384h3.175a1 1 0 1 0 0-2h-3.175Zm6.2.753a1 1 0 0 1 1.4.2l1.531 2.041 1.531-2.04a1 1 0 0 1 1.6 1.2l-1.88 2.507 1.88 2.508a1 1 0 0 1-1.6 1.2l-1.53-2.041-1.531 2.04a1 1 0 1 1-1.6-1.2l1.88-2.507-1.88-2.508a1 1 0 0 1 .2-1.4Zm-15.456-.2a1 1 0 0 0 0 2h1.33v5.216a1 1 0 1 0 2 0V22.98h1.332a1 1 0 1 0 0-2H6.602Z" fill="#1C1B1F"/></svg>
    });

    FileTsxFill.displayName = "FileTsxFill";

    export default FileTsxFill;
    