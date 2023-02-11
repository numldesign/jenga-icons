
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const RedislogoFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M15.666 7.222c0 .009.113.22.253.482.141.258.24.478.226.493-.015.009-.408.159-.872.323-.47.169-.84.31-.835.314.005.005.535.061 1.172.122.769.07 1.172.122 1.2.155.024.023.202.309.394.628l.347.581.06-.145c.033-.075.141-.333.235-.563l.173-.417.924-.098a26.83 26.83 0 0 1 1.003-.099l.08-.033c0-.014-.343-.154-.764-.314-.418-.154-.764-.29-.764-.295 0-.005.089-.225.201-.492.108-.267.192-.492.188-.497-.01-.01-.366.098-.788.234l-.764.253-.82-.323c-.806-.319-.849-.333-.849-.31Zm5.09 2.77c-.979.389-1.785.712-1.79.722-.01.01.722.304 1.622.66l1.631.643.174-.07c1.819-.708 3.468-1.364 3.464-1.374L22.58 9.284c-.032.005-.848.319-1.823.708Zm-9.402-.38c-.942.099-1.73.37-2.063.717-.23.235-.267.436-.121.68.21.366.904.67 1.86.825.432.075 1.693.06 2.129-.014 1.021-.178 1.687-.506 1.842-.919.056-.155.056-.173 0-.323-.155-.399-.806-.731-1.772-.9a9.324 9.324 0 0 0-1.875-.066Zm17.498 1.134c-.047.061-.22.202-.389.315-.497.318-1.134.609-5.114 2.325-2.798 1.2-3.51 1.518-4.477 1.982-1.073.511-1.518.657-2.057.657-.483 0-.774-.085-1.674-.483-.36-.16-1.837-.778-3.276-1.378-6.305-2.62-6.422-2.677-6.76-3.043l-.14-.154v2.47l.16.155c.154.15.674.464.857.515.052.014.394.155.764.315.37.159 2.18.918 4.022 1.687 3.047 1.27 3.74 1.56 4.781 2.015.549.244.853.305 1.374.287.38-.015.492-.038.825-.15.215-.07.585-.23.825-.352.792-.398 1.748-.82 5.559-2.461 3.586-1.547 4.054-1.763 4.444-2.03.398-.286.384-.215.384-1.593 0-.661-.005-1.2-.01-1.2l-.098.121ZM16.3 12.36c-1.467.225-2.681.417-2.704.427-.033.009 3.656 1.56 3.81 1.603l1.688-2.424c-.005-.033 0-.037-2.794.394Zm12.576 2.456c-.032.056-.187.188-.332.296-.478.328-1.196.656-5.555 2.53-2.508 1.084-3.295 1.43-4.04 1.791-1.21.586-1.5.68-2.147.68-.502-.005-.811-.084-1.477-.384-.642-.296-1.36-.596-4.237-1.79-5.02-2.082-5.597-2.345-5.953-2.687l-.174-.164v2.438l.197.187c.319.3.286.281 5.667 2.522a339.35 339.35 0 0 1 4.135 1.739c.792.356 1.021.44 1.335.506.732.15 1.275.028 2.461-.548.774-.375 1.716-.792 3.999-1.777 4.34-1.87 5.409-2.353 5.728-2.564a2.42 2.42 0 0 0 .342-.29l.136-.15v-1.22c0-.67-.005-1.218-.01-1.218l-.075.103Zm-.042 3.994c-.286.36-.862.637-5.339 2.564-2.92 1.26-3.81 1.655-4.771 2.11-1.008.477-1.341.58-1.922.58-.399 0-.802-.093-1.247-.29-1.046-.46-1.735-.75-4.786-2.02-3.469-1.444-4.58-1.918-4.95-2.1-.347-.174-.698-.422-.778-.549l-.08-.117v1.242c0 1.425-.023 1.317.356 1.575.422.281 1.05.563 5.218 2.292 2.91 1.21 3.96 1.65 4.476 1.885 1.055.473 1.336.548 1.927.515.539-.023.89-.14 1.823-.586.97-.464 1.688-.787 4.86-2.151 4.407-1.899 4.885-2.128 5.218-2.513l.117-.13V19.9c0-.67-.004-1.219-.01-1.219l-.112.127Z" fill="#1C1B1F"/></svg>
    });

    RedislogoFill.displayName = "RedislogoFill";

    export default RedislogoFill;
    