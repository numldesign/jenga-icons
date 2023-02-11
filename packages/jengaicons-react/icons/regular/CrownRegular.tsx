
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CrownRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.781 20.934c2.25-.236 4.52-.236 6.77 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m4 10.633 3.559 14.52c6.833-1.959 14.424-.816 17.366 0L28 10.633l-7.516 4.185-4.299-7.971-4.242 7.971L4 10.633Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CrownRegular.displayName = "CrownRegular";

    export default CrownRegular;
    