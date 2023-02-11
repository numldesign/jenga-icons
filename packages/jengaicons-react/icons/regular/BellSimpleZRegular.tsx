
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BellSimpleZRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12 28h8M13.5 12h5l-5 6h5" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.126 23.073s2.566-3.65 3-6.13c.144-.828.175-1.705.122-2.596C7.96 9.41 11.056 4 16 4s8.04 5.411 7.752 10.347c-.052.891-.022 1.768.122 2.595.434 2.481 3 6.13 3 6.13H5.126Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    BellSimpleZRegular.displayName = "BellSimpleZRegular";

    export default BellSimpleZRegular;
    