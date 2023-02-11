
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TagRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.515 11.31a1.36 1.36 0 1 0 0-2.719 1.36 1.36 0 0 0 0 2.719Z" fill="#1C1B1F"/><path d="m4.146 15.525 12.33 12.33c.195.195.51.195.705 0l10.673-10.672a.498.498 0 0 0 0-.705L15.52 4.144a.498.498 0 0 0-.432-.139L6.05 5.481a.498.498 0 0 0-.41.404l-1.633 9.2a.498.498 0 0 0 .138.44Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    TagRegular.displayName = "TagRegular";

    export default TagRegular;
    