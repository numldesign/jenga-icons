
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GooglePodcastsLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 4v2.77M21.539 9.077v2.77M16 25.23V28M16 10.461v11.077M10.462 9.077v7.385M21.539 15.539v7.384M4.923 14.615v2.77M10.462 20.154v2.769M27.077 14.615v2.77" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GooglePodcastsLogoRegular.displayName = "GooglePodcastsLogoRegular";

    export default GooglePodcastsLogoRegular;
    