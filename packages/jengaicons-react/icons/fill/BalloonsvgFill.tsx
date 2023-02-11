
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BalloonsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M26.194 13.517c0 5.102-4.132 11.08-9.234 11.08s-9.234-5.978-9.234-11.08a9.234 9.234 0 0 1 18.468 0Zm-9.297-5.624a1 1 0 0 1 1.15-.822 6.518 6.518 0 0 1 5.36 5.358 1 1 0 0 1-1.974.329 4.517 4.517 0 0 0-3.714-3.714 1 1 0 0 1-.822-1.151Zm-1.186 17.116-1.123 2.574a.5.5 0 0 0 .458.7h3.772a.5.5 0 0 0 .462-.69l-1.058-2.574a.5.5 0 0 0-.462-.31h-1.591a.5.5 0 0 0-.459.3Z" fill="#1C1B1F"/></svg>
    });

    BalloonsvgFill.displayName = "BalloonsvgFill";

    export default BalloonsvgFill;
    