
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PhoneDisconnectRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M18.98 13.088a9.183 9.183 0 0 0-6 .014.864.864 0 0 0-.556.648l-.642 3.212a.87.87 0 0 1-.531.638l-5.15 2.06a.868.868 0 0 1-1.009-.269 5.226 5.226 0 0 1 .439-6.893 14.806 14.806 0 0 1 20.938 0 5.227 5.227 0 0 1 .439 6.893.867.867 0 0 1-1.008.27l-5.155-2.063a.87.87 0 0 1-.53-.63l-.676-3.238a.863.863 0 0 0-.56-.642ZM6.42 23.838h19.16" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PhoneDisconnectRegular.displayName = "PhoneDisconnectRegular";

    export default PhoneDisconnectRegular;
    