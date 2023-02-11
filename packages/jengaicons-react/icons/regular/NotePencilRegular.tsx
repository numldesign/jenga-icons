
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NotePencilRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.626 4H4.5a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5V14.008" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><path d="M28 8.866 23.134 4l-10.46 10.424-.483 4.962h5.387L28 8.866Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m20.631 6.522 4.852 4.852" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    NotePencilRegular.displayName = "NotePencilRegular";

    export default NotePencilRegular;
    