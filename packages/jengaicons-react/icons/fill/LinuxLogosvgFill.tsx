
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const LinuxLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 27.924s4-7 4-15a8 8 0 0 1 16 0c0 8 4 15 4 15h-24Zm8.5-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.894 4.053a1 1 0 0 1 1.341-.447l3.553 1.776 3.553-1.776a1 1 0 1 1 .894 1.789l-4 2a1 1 0 0 1-.894 0l-4-2a1 1 0 0 1-.447-1.342Zm2.609 7.744a4.193 4.193 0 0 1 2.285-.697c.775 0 1.562.228 2.286.697a5.248 5.248 0 0 1 1.62 1.699h2.057a4.631 4.631 0 0 1-.074-.184c-.036-.091-.073-.185-.083-.203a6.982 6.982 0 0 0-2.343-2.57 6.36 6.36 0 0 0-3.463-1.033 6.36 6.36 0 0 0-3.462 1.033 6.982 6.982 0 0 0-2.345 2.572c-.01.018-.047.11-.083.199a5.224 5.224 0 0 1-.074.178h2.063a5.247 5.247 0 0 1 1.616-1.691Z" fill="#1C1B1F"/></svg>
    });

    LinuxLogosvgFill.displayName = "LinuxLogosvgFill";

    export default LinuxLogosvgFill;
    