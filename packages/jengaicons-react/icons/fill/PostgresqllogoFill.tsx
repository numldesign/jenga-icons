
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PostgresqllogoFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="m23.724 22.325-.006.049c-.061 2.506-.465 3.945-1.097 4.841-.726 1.04-1.63 1.315-2.646 1.532-2.615.56-3.166-1.125-3.472-2.071l-.017-.049-.037-.102c-.132-.361-.218-.815-.276-1.327a20.948 20.948 0 0 1-.1-1.501c-.005-.085-.008-.191-.012-.305l-.008-.262a3.565 3.565 0 0 1 .015-.415c-.29.13-.594.22-.907.272-.8.136-1.517.008-1.948-.101-.36-.09-.818-.299-1.101-.566a1.502 1.502 0 0 1-.132-.14c-.24.198-.489.337-.741.427-.939.337-1.765-.016-2.483-.815-.52-.574-.985-1.42-1.397-2.393-1.187-2.817-1.97-6.878-2.02-7.88-.42-8.371 7.11-6.37 9.162-5.67.36-.215.746-.384 1.149-.501a6.126 6.126 0 0 1 1.866-.245c.349.004.694.028 1.043.062.242.027.483.062.722.105.838-.24 2.8-.671 4.771-.202 1.35.322 2.731 1.036 3.849 2.46.737.943.729 3.088.046 5.555a23.25 23.25 0 0 1-2.451 5.672c.252-.063.651-.148 1.284-.28.492-.1.876-.066 1.156.07.485.233.694.617.66 1.117-.016.257-.121.509-.292.75-.283.383-.9.868-1.633 1.21a5.437 5.437 0 0 1-1.296.372 6.889 6.889 0 0 1-1.412.097h-.043l-.167-.016c-.003.039-.007.078-.015.12l-.014.13Zm-.052-3.35c-.439.125-1.067.354-1.001 1.626a74.549 74.549 0 0 1-.28 2.467 70.988 70.988 0 0 1-.306 2.188c-.116.667-.298 1.148-.628 1.486-.326.341-.823.566-1.556.725-.838.179-1.365.004-1.707-.287-.353-.298-.539-.729-.655-1.02-.109-.28-.19-1.024-.237-2.021a53.28 53.28 0 0 1-.026-3.536c.004-.244.008-.471-.075-.708-.1-.276-.28-.524-.5-.683-.206-.147-.5-.248-.753-.225a.915.915 0 0 0-.14.023c.044-.17.105-.356.176-.553.088-.248.109-.322.135-.394.031-.085.07-.168.236-.534.42-.935.955-2.13.357-4.904-.17-.776-.605-1.183-1.152-1.354-.349-.108-.737-.116-1.12-.058-.37.058-.738.17-1.064.303a4.184 4.184 0 0 0-.59.302c.129-1.621.835-5.477 4.71-5.411 3.212.05 5.016 2.156 5.846 3.665.21.377.353.714.443.97v.002a.343.343 0 0 1 .019.056c-1.897-.197-2.657.462-2.816 1.459-.225 1.4.915 3.445 1.493 4.48l.04.071c.116.21.204.369.235.446.23.554.513.911.738 1.187l.042.054c.052.067.099.126.136.178Zm-8.29 1.289c-.412.523-.54.682-1.816.946a2.034 2.034 0 0 0-.477.144c.116.081.295.155.45.194.314.077.838.174 1.393.077.547-.093 1.132-.372 1.61-1.035.097-.136.077-.322.027-.474a.774.774 0 0 0-.256-.357.536.536 0 0 0-.307-.1.23.23 0 0 0-.15.07c-.169.169-.327.347-.474.535Zm-2.48-1.765c.093.1.192.194.296.283a43.828 43.828 0 0 0-1.804 2.044c-.214.256-.415.411-.602.477-.34.124-.694-.062-1.04-.446-.414-.462-.806-1.18-1.159-2.017-1.125-2.665-1.866-6.486-1.913-7.421-.318-6.409 5.513-4.985 7.317-4.392-1.998 1.963-1.909 5.474-1.905 5.501-.003.073.002.162.008.276l.004.062c.035.547.097 1.598-.066 2.766a3.535 3.535 0 0 0-.02.857c.074.78.4 1.478.885 2.01ZM23.929 9.75c-.628-1.149-1.777-2.611-3.604-3.418.877-.179 2.289-.334 3.705.074a5.443 5.443 0 0 1 2.816 1.905c.474.609.384 2.3-.19 4.375a21.782 21.782 0 0 1-2.556 5.738c-.027-.03-.053-.064-.08-.098l-.002-.003a.402.402 0 0 1-.035-.043c.69-1.132.559-2.226.435-3.254-.05-.404-.097-.792-.086-1.16a9.042 9.042 0 0 1 .113-1.036c.066-.411.124-.803.109-1.28 0-.006 0-.012.002-.018a.104.104 0 0 0 .001-.017c.02-.113-.023-.369-.14-.695a6.887 6.887 0 0 0-.488-1.07ZM12.77 12.722c-.003-.066-.007-.132-.007-.198.004-.015.376-.186.866-.388.283-.112.597-.213.907-.26.295-.042.582-.042.827.035.322.101.585.357.69.854.555 2.564.07 3.642-.31 4.488-.194.426-.252.59-.325.797l-.058.165a6.32 6.32 0 0 0-.203.64h-.007a2.641 2.641 0 0 1-.3-.023 2.422 2.422 0 0 1-1.45-.788 2.767 2.767 0 0 1-.714-1.617 2.863 2.863 0 0 1 .015-.702c.175-1.245.109-2.336.074-2.898l-.005-.105Zm2.79-.364a1.3 1.3 0 0 0-.807-.113c-.172.043-.246.127-.252.228-.005.101.058.218.16.327a.745.745 0 0 0 .418.229h.004c.17.023.33-.035.446-.113.124-.085.206-.202.217-.283.012-.105-.058-.202-.186-.275Zm6.087.306c.105-.656.698-1.075 2.234-.884-.003.337-.05.64-.1.954l-.006.034c-.049.327-.1.67-.115 1.08-.011.398.037.81.086 1.23l.003.026c.101.83.206 1.707-.197 2.56a3.983 3.983 0 0 1-.179-.364c-.05-.12-.16-.322-.306-.582-.543-.974-1.607-2.883-1.42-4.054Zm2.364 6.911a4.16 4.16 0 0 0 .06-.017c.79.596 2.113.35 2.987.187l.008-.001c-.21.201-.55.43-.958.62-.396.183-1.016.307-1.598.342-.334.015-.648.008-.885-.043-.151-.027-.252-.058-.283-.09-.038-.795.327-.898.56-.964l.003-.001.106-.033Zm-.898-7.039c.097-.101.156-.221.144-.291-.012-.081-.09-.14-.21-.167a1.2 1.2 0 0 0-.764.105c-.111.064-.156.136-.155.207.002.105.103.209.24.286a.587.587 0 0 0 .347.073.66.66 0 0 0 .398-.213Zm3.798 6.556c-1.757.365-2.281.136-2.436-.012a22.565 22.565 0 0 0 2.824-6.215c.628-2.273.679-4.19.074-4.965a6.075 6.075 0 0 0-3.158-2.134c-1.691-.488-3.36-.248-4.271-.035a17.602 17.602 0 0 1-.17.04c-.02.007-.366.104-.61.17a7.37 7.37 0 0 0-1.657-.206c-1.225-.02-2.172.291-2.905.792-1.234-.458-8.989-3.022-8.593 4.923.05.966.81 4.91 1.967 7.65.384.907.81 1.687 1.276 2.207.535.59 1.121.857 1.761.628.303-.108.606-.325.896-.678a46.476 46.476 0 0 1 1.847-2.091 3.014 3.014 0 0 0 1.33.357c0 .015 0 .03.005.046-.082.09-.161.184-.237.28-.295.376-.388.492-1.42.705-.465.097-.745.225-.896.369a.536.536 0 0 0-.186.485.668.668 0 0 0 .217.384c.198.186.536.337.807.407.373.093.993.206 1.672.09a3.036 3.036 0 0 0 1.54-.75 50.89 50.89 0 0 0 .043 2.631c.05 1.06.143 1.885.287 2.238.143.357.368.889.842 1.288.48.404 1.195.66 2.28.427.87-.186 1.47-.47 1.902-.915.43-.446.663-1.036.803-1.84.081-.472.201-1.341.31-2.218.09-.698.17-1.389.225-1.881.066.019.14.038.213.054a4.52 4.52 0 0 0 1.052.054c.655-.039 1.373-.186 1.842-.403.633-.295 1.148-.691 1.374-1.001a.779.779 0 0 0 .163-.396c.015-.21-.074-.369-.276-.466-.155-.073-.396-.089-.737-.019Z" fill="#1C1B1F"/></svg>
    });

    PostgresqllogoFill.displayName = "PostgresqllogoFill";

    export default PostgresqllogoFill;
    