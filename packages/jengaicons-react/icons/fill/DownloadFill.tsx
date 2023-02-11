
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DownloadFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M18 2.967a1 1 0 1 0-2 0v9.739l-2.54-2.579a.982.982 0 0 0-1.405 0 1.018 1.018 0 0 0 0 1.425l4.223 4.285a.982.982 0 0 0 1.446-.002l4.22-4.283a1.018 1.018 0 0 0 0-1.425.982.982 0 0 0-1.403 0L18 12.706v-9.74Zm10.96 15.558v7.143a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-7.143a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1Zm-3.692 3.571c0 .758-.62 1.372-1.385 1.372a1.378 1.378 0 0 1-1.384-1.372c0-.757.62-1.371 1.384-1.371.765 0 1.385.614 1.385 1.371Z" fill="#1C1B1F"/></svg>
    });

    DownloadFill.displayName = "DownloadFill";

    export default DownloadFill;
    