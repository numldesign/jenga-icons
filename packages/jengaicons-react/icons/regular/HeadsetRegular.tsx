
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HeadsetRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M27.043 15.46v8.336h-5.629V15.46h5.629Zm0 0A10.96 10.96 0 0 0 16 4.5 10.96 10.96 0 0 0 4.957 15.46m0 0v8.336h5.462V15.46H4.957Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.788 28.5h7.255a3 3 0 0 0 3-3v-4.103" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    HeadsetRegular.displayName = "HeadsetRegular";

    export default HeadsetRegular;
    