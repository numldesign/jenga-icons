
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SkullRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.724 19.081a2.376 2.376 0 1 0 0-4.75 2.376 2.376 0 0 0 0 4.75ZM20.276 19.081a2.375 2.375 0 1 0 0-4.75 2.375 2.375 0 0 0 0 4.75ZM14.1 27.633v-3.8M17.9 27.633v-3.8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m22.216 23.915-.57-.822.57.822Zm3.711-8.988a9.915 9.915 0 0 1-4.28 8.166l1.139 1.644a11.915 11.915 0 0 0 5.141-9.81h-2ZM16 5c5.483 0 9.927 4.445 9.927 9.927h2C27.927 8.34 22.587 3 16 3v2Zm-9.927 9.927C6.073 9.445 10.517 5 16 5V3C9.413 3 4.073 8.34 4.073 14.927h2Zm4.441 8.276a9.917 9.917 0 0 1-4.441-8.276h-2c0 4.151 2.121 7.807 5.335 9.942l1.107-1.666Zm.68 4.297v-3.038h-2V27.5h2Zm10.299-.5h-10.8v2h10.8v-2Zm-.5-2.664V27.5h2v-3.164h-2ZM9.193 27.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2Zm.215-2.631a.486.486 0 0 1-.215-.407h2c0-.52-.268-.987-.678-1.26l-1.107 1.666ZM21.493 29a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2Zm.154-5.907a1.513 1.513 0 0 0-.654 1.243h2a.487.487 0 0 1-.207.401l-1.14-1.644Z" fill="#1C1B1F"/></svg>
    });

    SkullRegular.displayName = "SkullRegular";

    export default SkullRegular;
    