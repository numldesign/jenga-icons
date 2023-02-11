
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ShoppingCartRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.756 28a2.519 2.519 0 1 0 0-5.037 2.519 2.519 0 0 0 0 5.037ZM22.83 28a2.519 2.519 0 1 0 0-5.037 2.519 2.519 0 0 0 0 5.037ZM8.474 8.148h18.607l-2.737 9.582a1.658 1.658 0 0 1-1.596 1.203h-9.94a1.659 1.659 0 0 1-1.596-1.203L7.46 4.602A.83.83 0 0 0 6.663 4H4.918" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ShoppingCartRegular.displayName = "ShoppingCartRegular";

    export default ShoppingCartRegular;
    