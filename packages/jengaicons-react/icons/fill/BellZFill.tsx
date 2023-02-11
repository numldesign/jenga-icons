
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BellZFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.96 23.356v.985c0 1.046.421 2.048 1.171 2.787a4.03 4.03 0 0 0 2.829 1.155 4.03 4.03 0 0 0 2.828-1.155 3.913 3.913 0 0 0 1.172-2.787v-.985" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clip-rule="evenodd" d="M6.617 22.555c-.218.34.026.8.431.8h19.823c.405 0 .65-.46.432-.8-.777-1.215-2.161-3.567-2.469-5.33a11.313 11.313 0 0 1-.122-2.595C25 9.694 21.904 4.283 16.96 4.283S8.919 9.694 9.208 14.63c.052.891.022 1.768-.123 2.595-.307 1.762-1.692 4.115-2.468 5.33Zm7.574-11.272a1 1 0 1 0 0 2h2.774l-3.558 4.487a1 1 0 0 0 .784 1.62h4.843a1 1 0 1 0 0-2H16.26l3.557-4.486a1 1 0 0 0-.783-1.621H14.19Z" fill="#1C1B1F"/></svg>
    });

    BellZFill.displayName = "BellZFill";

    export default BellZFill;
    