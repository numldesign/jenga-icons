
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PokerChipRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM16 9V4M11.05 11.05 7.515 7.515M9 16H4M11.05 20.95l-3.535 3.535M16 23v5M20.95 20.95l3.535 3.535M23 16h5M20.95 11.05l3.535-3.535" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PokerChipRegular.displayName = "PokerChipRegular";

    export default PokerChipRegular;
    