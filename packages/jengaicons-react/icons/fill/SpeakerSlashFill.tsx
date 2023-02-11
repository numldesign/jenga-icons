
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SpeakerSlashFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M6.287 5.043A1 1 0 0 1 7.7 5.11l20 22a1 1 0 1 1-1.48 1.346l-7.123-7.835v5.8a.5.5 0 0 1-.802.399l-6.266-4.757v-9.218L6.22 6.455a1 1 0 0 1 .067-1.412Zm21.016 5.296a1 1 0 1 0-1.414 1.415 7.07 7.07 0 0 1 0 9.999 1 1 0 0 0 1.414 1.414 9.069 9.069 0 0 0 0-12.828Zm-3.17 3.17a1 1 0 0 0-1.414 1.415 2.586 2.586 0 0 1 0 3.658 1 1 0 0 0 1.414 1.415 4.586 4.586 0 0 0 0-6.487Zm-5.849-6.72-3.14 2.521 3.953 4.5V7.18a.5.5 0 0 0-.813-.39Zm-8.255 5.695h-.597a4.472 4.472 0 0 0 0 8.944h.597v-8.944Z" fill="#1C1B1F"/></svg>
    });

    SpeakerSlashFill.displayName = "SpeakerSlashFill";

    export default SpeakerSlashFill;
    