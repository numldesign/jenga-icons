
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GitlabLogoSimplesvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M22.172 13.215h-10.12l-3.716-7.43-3.459 12.81 12.299 8.456 11.786-8.456-3.587-12.81-3.203 7.43Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GitlabLogoSimplesvgFill.displayName = "GitlabLogoSimplesvgFill";

    export default GitlabLogoSimplesvgFill;
    