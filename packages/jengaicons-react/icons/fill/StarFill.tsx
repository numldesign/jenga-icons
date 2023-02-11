
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StarFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.484 3.592a.5.5 0 0 1 .951 0l2.59 7.972a.5.5 0 0 0 .476.345h8.381a.5.5 0 0 1 .294.905l-6.78 4.926a.5.5 0 0 0-.182.559l2.59 7.971a.5.5 0 0 1-.77.56l-6.78-4.927a.5.5 0 0 0-.588 0l-6.78 4.926a.5.5 0 0 1-.77-.559l2.59-7.971a.5.5 0 0 0-.182-.559l-6.78-4.926a.5.5 0 0 1 .293-.905h8.382a.5.5 0 0 0 .475-.345l2.59-7.972Z" fill="#1C1B1F"/></svg>
    });

    StarFill.displayName = "StarFill";

    export default StarFill;
    