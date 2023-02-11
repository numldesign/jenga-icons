
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BellSimpleZFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M7.048 23.356c-.405 0-.65-.46-.431-.802.776-1.214 2.16-3.566 2.468-5.329.145-.827.175-1.704.123-2.595-.29-4.936 2.807-10.347 7.752-10.347 4.944 0 8.04 5.411 7.751 10.347-.052.891-.021 1.768.123 2.595.308 1.762 1.692 4.115 2.468 5.33.218.34-.026.8-.431.8H7.048Zm6.412-11.073a1 1 0 0 1 1-1h5a1 1 0 0 1 .768 1.64l-3.633 4.36h2.865a1 1 0 1 1 0 2h-5a1 1 0 0 1-.769-1.64l3.634-4.36H14.46a1 1 0 0 1-1-1Zm-.5 15a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2h-8Z" fill="#1C1B1F"/></svg>
    });

    BellSimpleZFill.displayName = "BellSimpleZFill";

    export default BellSimpleZFill;
    