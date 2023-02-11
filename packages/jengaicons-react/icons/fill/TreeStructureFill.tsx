
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TreeStructureFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M21.28 6.223a.5.5 0 0 1 .5-.5h6.68a.5.5 0 0 1 .5.5v6.68a.5.5 0 0 1-.5.5h-6.68a.5.5 0 0 1-.5-.5v-2.376h-3.397v11.47h3.397v-2.334a.5.5 0 0 1 .5-.5h6.68a.5.5 0 0 1 .5.5v6.68a.5.5 0 0 1-.5.5h-6.68a.5.5 0 0 1-.5-.5v-2.346h-4.397a1 1 0 0 1-1-1v-5.714H11.68v1.86a.5.5 0 0 1-.5.5H5.46a.5.5 0 0 1-.5-.5v-5.72a.5.5 0 0 1 .5-.5h5.72a.5.5 0 0 1 .5.5v1.86h4.203V9.527a1 1 0 0 1 1-1h4.397V6.223Z" fill="#1C1B1F"/></svg>
    });

    TreeStructureFill.displayName = "TreeStructureFill";

    export default TreeStructureFill;
    