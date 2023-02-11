
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChatCenteredFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M27.96 4.283h-22a1 1 0 0 0-1 1v15.935a1 1 0 0 0 1 1h6.49a1 1 0 0 1 .837.453l2.834 4.34a1 1 0 0 0 1.67.006l2.888-4.352a1 1 0 0 1 .833-.447h6.448a1 1 0 0 0 1-1V5.283a1 1 0 0 0-1-1Z" fill="#1C1B1F"/></svg>
    });

    ChatCenteredFill.displayName = "ChatCenteredFill";

    export default ChatCenteredFill;
    