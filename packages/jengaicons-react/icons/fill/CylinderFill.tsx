
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CylinderFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M23.225 10.992c-1.512.938-3.758 1.532-6.265 1.532-2.507 0-4.753-.594-6.265-1.532v13.482c0 .618.26 1.112.646 1.355 3.24 2.032 7.762 1.852 11.135-.029.449-.25.75-.786.75-1.447V10.992Zm1.97-3.099c-.244-2.303-3.838-4.131-8.235-4.131-4.395 0-7.988 1.826-8.233 4.129-.021.08-.032.165-.032.252v16.33c0 1.139.483 2.36 1.583 3.05 3.958 2.483 9.271 2.2 13.172.024 1.205-.672 1.775-1.96 1.775-3.194V8.143c0-.086-.01-.17-.03-.25Z" fill="#1C1B1F"/></svg>
    });

    CylinderFill.displayName = "CylinderFill";

    export default CylinderFill;
    