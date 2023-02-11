
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CouchdblogoFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M24.46 19.483c0 .995-.524 1.482-1.5 1.5h-12c-.976-.018-1.5-.505-1.5-1.5 0-.994.524-1.481 1.5-1.499h12c.976.018 1.5.505 1.5 1.5Zm-1.5 2.251h-12c-.976.018-1.5.505-1.5 1.5 0 .994.524 1.481 1.5 1.499h12c.976-.018 1.5-.505 1.5-1.5 0-.994-.524-1.481-1.5-1.499Zm3.75-8.249c-.976.017-1.5.504-1.5 1.499v8.25c0 .994.524 1.481 1.5 1.499v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.989-.786-2.963-2.25-2.998Zm-19.5 0c-1.464.035-2.25 1.01-2.25 2.999v3.75c0 2.983.786 4.445 2.25 4.497v.002c.976-.017 1.5-.505 1.5-1.5v-8.25c0-.994-.524-1.481-1.5-1.499Zm19.5-.751c0-2.487-1.31-3.705-3.75-3.748v-.002h-12v.002c-2.44.043-3.75 1.261-3.75 3.748 1.464.027 2.25.758 2.25 2.25 0 1.491.786 2.222 2.25 2.248v.002h10.5v-.002c1.464-.026 2.25-.757 2.25-2.248 0-1.492.786-2.223 2.25-2.25Z" fill="#1C1B1F"/></svg>
    });

    CouchdblogoFill.displayName = "CouchdblogoFill";

    export default CouchdblogoFill;
    