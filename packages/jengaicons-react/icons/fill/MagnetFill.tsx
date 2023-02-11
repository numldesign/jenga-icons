
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MagnetFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M20.866 16.314 13.57 23.61l4.674 4.673 7.965-7.965A9.393 9.393 0 0 0 12.925 7.034L4.96 15l4.648 4.648 7.295-7.296a2.802 2.802 0 1 1 3.963 3.963Zm-3.394 3.394 4.674 4.674-3.902 3.901-4.674-4.674 3.902-3.9Zm-3.965-3.965-2.338-2.338-2.314-2.303-3.895 3.897 4.648 4.648 3.9-3.904Z" fill="#1C1B1F"/><path d="m13.57 23.61 7.296-7.296a2.802 2.802 0 0 0-3.963-3.963l-7.295 7.296m3.962 3.963 4.674 4.673m-4.674-4.674 3.902-3.9 4.674 4.673-3.902 3.901m0 0 7.965-7.965A9.393 9.393 0 0 0 12.925 7.034L4.96 15m0 0 4.648 4.648M4.96 14.999l3.895-3.897 2.314 2.303 2.338 2.338-3.9 3.904" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    MagnetFill.displayName = "MagnetFill";

    export default MagnetFill;
    