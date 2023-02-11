
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChatCenteredDotsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#1C1B1F"/><path d="M28 4H4v17.935h8.03L15.993 28l4.023-6.065H28V4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    ChatCenteredDotsRegular.displayName = "ChatCenteredDotsRegular";

    export default ChatCenteredDotsRegular;
    