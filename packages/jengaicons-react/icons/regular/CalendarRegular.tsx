
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CalendarRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M22 4.5v4M10 4.5v4M5 12.5h22" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 6.5h22v22H5v-22Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M11.5 23.34a1.77 1.77 0 0 0 3.148-1.111c0-.914-.932-1.666-1.852-1.76-.08-.008-.128-.1-.082-.166l1.826-2.647a.1.1 0 0 0-.082-.156H11.5M20 24V18.41a.5.5 0 0 0-.769-.422l-.893.57" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    CalendarRegular.displayName = "CalendarRegular";

    export default CalendarRegular;
    