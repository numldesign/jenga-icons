
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const StarFourFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.491 6.05a.5.5 0 0 1 .938 0l2.692 7.276a.5.5 0 0 0 .296.296l7.276 2.692a.5.5 0 0 1 0 .938l-7.276 2.692a.5.5 0 0 0-.296.296l-2.692 7.276a.5.5 0 0 1-.938 0l-2.692-7.276a.5.5 0 0 0-.296-.296l-7.276-2.692a.5.5 0 0 1 0-.938l7.276-2.692a.5.5 0 0 0 .296-.296L16.49 6.05Z" fill="#1C1B1F"/></svg>
    });

    StarFourFill.displayName = "StarFourFill";

    export default StarFourFill;
    