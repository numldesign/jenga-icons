
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ToiletPaperFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M9.323 24.59c1.577 0 2.978-1.498 3.867-3.822v5.669a1 1 0 0 0 1 1h14.77a1 1 0 0 0 1-1V14.129a9 9 0 0 0-9-9H9.533a2.482 2.482 0 0 0-.21-.009c-2.688 0-4.867 4.359-4.867 9.735 0 5.377 2.179 9.736 4.867 9.736Zm1.46-9.735a1.46 1.46 0 1 1-2.92 0 1.46 1.46 0 0 1 2.92 0ZM20.96 7.13h-7.957c.226.293.433.608.62.936.926 1.62 1.517 3.795 1.564 6.22h.882a1 1 0 1 1 0 2h-.878v9.152H27.96v-9.152h-.99a1 1 0 0 1 0-2h.99v-.156a7 7 0 0 0-7-7Zm-1.257 7.156a1 1 0 0 0 0 2h3.634a1 1 0 0 0 0-2h-3.634Z" fill="#1C1B1F"/></svg>
    });

    ToiletPaperFill.displayName = "ToiletPaperFill";

    export default ToiletPaperFill;
    