
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PersonFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M19.898 7.733a2.95 2.95 0 1 1-5.9 0 2.95 2.95 0 0 1 5.9 0Zm-6.068 4.763h6.635a.3.3 0 0 1 .232.11l4.953 6.066a.3.3 0 0 1-.02.402l-1.344 1.343a.3.3 0 0 1-.404.02L20.8 17.884c-.23-.19-.566.035-.478.32l2.693 8.647a.3.3 0 0 1-.075.302l-1.362 1.362a.3.3 0 0 1-.467-.053l-3.652-5.843a.3.3 0 0 0-.506-.005l-3.818 5.858a.3.3 0 0 1-.463.049l-1.136-1.137a.3.3 0 0 1-.076-.296l2.627-8.986a.3.3 0 0 0-.467-.324l-3.584 2.676a.3.3 0 0 1-.392-.028L8.297 19.08a.3.3 0 0 1-.013-.41l5.32-6.073a.3.3 0 0 1 .226-.102Z" fill="#1C1B1F"/></svg>
    });

    PersonFill.displayName = "PersonFill";

    export default PersonFill;
    