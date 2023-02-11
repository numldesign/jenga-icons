
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WebhookRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m10.206 20.075 3.566-5.885M17.794 12.043l2.883 5.387M14.209 22.024h6.198M13.878 14.246a5.089 5.089 0 1 1 7.511-2.423M20.682 17.449a5.089 5.089 0 1 1-1.462 8.08M7.701 17.074a5.089 5.089 0 1 0 6.476 5.05" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><circle cx="16.646" cy="9.976" r="2.25" stroke="#1C1B1F" strokeWidth="2"/><circle cx="22.71" cy="22.024" r="2.25" transform="rotate(135 22.71 22.024)" stroke="#1C1B1F" strokeWidth="2"/><circle cx="2.25" cy="2.25" r="2.25" transform="scale(1 -1) rotate(-45 -23.633 -18.142)" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    WebhookRegular.displayName = "WebhookRegular";

    export default WebhookRegular;
    