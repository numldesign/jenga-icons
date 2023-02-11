
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TagChevronsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M23.234 8.203H4.96l5.208 8.199-5.208 7.96h18.274l5.726-7.96-5.726-8.199Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    TagChevronsvgFill.displayName = "TagChevronsvgFill";

    export default TagChevronsvgFill;
    