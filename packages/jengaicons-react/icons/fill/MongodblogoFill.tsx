
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MongodblogoFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M13.762 7.53c1.082-1.2 2-2.401 2.2-2.659a.059.059 0 0 1 .074 0c.184.258 1.119 1.459 2.2 2.66 9.244 11.033-1.448 18.48-1.448 18.48l-.092.05a60.385 60.385 0 0 1-.275 2.797h-.807s-.201-1.647-.275-2.796l-.091-.069c-.037.017-10.728-7.43-1.486-18.462ZM16 25.84s.477-.378.606-.584v-.017l-.587-12.01c0-.035-.055-.035-.055 0l-.587 12.01v.017c.128.206.623.584.623.584Z" fill="#1C1B1F"/></svg>
    });

    MongodblogoFill.displayName = "MongodblogoFill";

    export default MongodblogoFill;
    