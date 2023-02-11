
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const EyedropperFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m24.085 14.51.658.657a2.152 2.152 0 0 1 0 3.047l-.946.947a1.077 1.077 0 0 1-1.524 0l-8.172-8.172a1.077 1.077 0 0 1 0-1.524l.947-.946a2.153 2.153 0 0 1 3.047 0l.658.658 3.715-3.715c1.453-1.453 3.82-1.542 5.312-.13a3.77 3.77 0 0 1 .076 5.407l-3.77 3.77Z" fill="#1C1B1F"/><path d="m21.234 18.122-7.54 7.541a4.308 4.308 0 0 1-4.163 1.116l-3.152 1.376a1.078 1.078 0 0 1-1.192-.226v0a.773.773 0 0 1-.162-.856l1.458-3.341A4.307 4.307 0 0 1 7.6 19.569l7.541-7.541" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    EyedropperFill.displayName = "EyedropperFill";

    export default EyedropperFill;
    