
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PlausibelAnalyticslogoFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M15.055 4.243c-1.859.322-3.424 1.11-4.72 2.377-1.333 1.303-2.157 2.82-2.558 4.715l-.137.645-.018 8.078-.018 8.084h.167c.096 0 .4-.03.675-.06 2.348-.287 4.344-1.709 5.431-3.866.275-.55.473-1.183.61-1.972.113-.669.12-.89.101-4.38l-.018-3.674.144-.358c.197-.49.74-1.034 1.23-1.23l.36-.144 3.345-.006c1.84 0 3.453-.024 3.579-.048.585-.114 1.213-.603 1.464-1.147a3.49 3.49 0 0 0 .209-.64c.066-.328.06-.418-.036-.788-.299-1.1-1.35-2.623-2.426-3.513-1.219-1.01-2.563-1.685-4.015-2.026-.764-.173-2.497-.203-3.37-.047Z" fill="#1C1B1F"/><path d="M25.591 10.55c.096.371.102.46.036.79-.042.196-.137.49-.209.639-.251.543-.878 1.033-1.464 1.147-.125.024-1.739.047-3.579.047l-3.346.006-.358.144c-.49.197-1.034.74-1.23 1.23l-.144.36.018 3.674c.014 2.832.013 3.51-.049 4.024a8.992 8.992 0 0 0 11.048-8.756c.04-1.242-.465-2.72-.723-3.305Z" fill="#1C1B1F"/></svg>
    });

    PlausibelAnalyticslogoFill.displayName = "PlausibelAnalyticslogoFill";

    export default PlausibelAnalyticslogoFill;
    