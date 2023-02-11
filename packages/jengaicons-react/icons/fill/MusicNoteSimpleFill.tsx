
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MusicNoteSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.718 28.783a5.21 5.21 0 1 0 0-10.419 5.21 5.21 0 0 0 0 10.419Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M27.411 8.042 16.928 4.783v18.993" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    MusicNoteSimpleFill.displayName = "MusicNoteSimpleFill";

    export default MusicNoteSimpleFill;
    