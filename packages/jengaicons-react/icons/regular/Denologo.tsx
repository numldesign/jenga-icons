import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Denologo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="m24.485 7.765-.707.707.707-.707Zm-16.97 0 .707.707-.708-.707Zm0 16.97.707-.707-.708.707Zm8.18-3.618.02 1h.02l-.04-1Zm.117-.005-.033-.999h-.007l.04 1Zm.427-.014.934.358.539-1.407-1.506.05.033 1Zm-.108.282-.934-.358-.157.41.197.395.894-.447Zm.014.028.92-.393-.012-.027-.014-.027-.894.447Zm.084.22.95-.316-.003-.006-.947.322Zm.01.028.958-.287-.005-.015-.005-.014-.948.316Zm.014.047.962-.275-.004-.012-.958.287Zm.019.066-.962.274.006.021.007.02.949-.315Zm.014.042-.949.316.01.028.01.027.929-.371Zm.018.047.965-.263-.015-.055-.021-.054-.929.372Zm.015.051.97-.242-.003-.01-.003-.01-.965.262Zm.018.075-.97.243.005.02.006.02.96-.283Zm.024.08.965-.263-.003-.01-.003-.01-.96.283Zm.014.052-.965.263.001.004.964-.267Zm.023.084.967-.255-.003-.013-.964.268Zm.024.089.978-.206-.005-.024-.006-.024-.967.254Zm.018.09-.978.205.004.018.004.019.97-.243Zm.024.093-.97.242.004.017.004.015.962-.274Zm.019.066.975-.222-.006-.027-.008-.026-.961.274Zm.046.206-.975.221.002.006.973-.227Zm.033.14.983-.184-.004-.021-.005-.022-.974.227Zm.014.075-.983.185.002.01.002.01.98-.205Zm.024.113.98-.196-.001-.008-.98.204Zm.023.117-.98.196.002.014.004.015.974-.225Zm.028.122.983-.186-.004-.02-.004-.019-.975.225Zm.033.173-.983.186.002.01.981-.196Zm.028.141.983-.187-.002-.01-.98.197Zm.038.197-.983.187.983-.187Zm.018.098-.982.187.002.01.002.01.979-.207Zm.033.155.985-.174-.003-.017-.003-.017-.979.208Zm.028.16.986-.172v-.002l-.986.173Zm.038.215-.985.171.002.013.983-.184Zm.042.225.988-.158-.002-.013-.003-.013-.983.184Zm.038.234-.988.158.002.008v.008l.986-.174Zm.042.24.985-.171v-.003l-.985.173Zm.042.243.986-.164v-.006l-.986.17Zm.042.253.988-.158-.001-.006-.987.164Zm.042.263-.987.158v.002l.987-.16Zm.033.201.99-.149-.003-.011-.987.16Zm.052.342-.99.15.002.007.001.008.987-.165Zm.023.141.988-.154-.001-.01-.987.164Zm.056.361.99-.141-.002-.013-.988.154Zm.043.295-.99.142.001.011.002.012.987-.165Zm.037.225.991-.135-.002-.014-.002-.015-.987.164Zm.042.31-.99.135v.007l.002.008.988-.15Zm.024.154-.989.15.147.971.974-.13-.132-.99Zm6.53-3.412-.738-.676.737.676Zm.051-.056.737.675.371-.404-.142-.53-.966.259Zm-.24-.89-.965.257v.001l.966-.259Zm-.632-2.368.966-.258-.966.258Zm-.394-1.472.966-.258v-.001l-.966.259Zm-.346-1.294.965-.259-.001-.005-.965.264Zm-.216-.787-.965.264.965-.264Zm-.136-.497-.967.257.002.007.965-.264Zm-.08-.3.967-.257-.003-.009-.002-.009-.962.275Zm-.075-.263-.97.243.004.016.005.016.961-.275Zm-.028-.112.97-.243-.006-.026-.008-.025-.956.294Zm-.019-.061-.961.275.003.01.003.009.955-.294Zm-.009-.033.962-.275-.006-.02-.007-.021-.949.316Zm-.01-.028-.954.297.003.01.003.01.949-.317Zm-2.038-2.972.615-.788-.615.788ZM16.53 16.03l-.707-.707.707.707Zm-1.06 0-.708.707.707-.707Zm0-1.06-.708-.707.707.707ZM16 5.25a11 11 0 0 1 7.778 3.222l1.414-1.414A13 13 0 0 0 16 3.25v2ZM8.222 8.472A11 11 0 0 1 16 5.25v-2a13 13 0 0 0-9.193 3.808l1.415 1.414ZM5 16.25a11 11 0 0 1 3.222-7.778L6.807 7.058A13 13 0 0 0 3 16.25h2Zm3.222 7.778A11 11 0 0 1 5 16.25H3a13 13 0 0 0 3.807 9.192l1.415-1.414ZM16 27.25a11 11 0 0 1-7.778-3.222l-1.415 1.414A13 13 0 0 0 16 29.25v-2Zm7.778-3.222A11 11 0 0 1 16 27.25v2a13 13 0 0 0 9.192-3.808l-1.414-1.414ZM27 16.25a11 11 0 0 1-3.222 7.778l1.414 1.414A13 13 0 0 0 29 16.25h-2Zm-3.222-7.778A11 11 0 0 1 27 16.25h2a13 13 0 0 0-3.808-9.192l-1.414 1.414Zm-13.453 8.501c0-1.982 2.05-3.93 5.206-3.93v-2c-3.819 0-7.206 2.447-7.206 5.93h2Zm5.35 3.144c-1.807.037-3.182-.332-4.07-.912-.856-.559-1.28-1.315-1.28-2.232h-2c0 1.662.825 3.018 2.186 3.906 1.329.867 3.14 1.28 5.205 1.238l-.041-2Zm.097-.004-.117.005.08 1.998.117-.004-.08-1.999Zm.434-.014-.427.014.066 1.999.427-.014-.066-2Zm.859 1.639.108-.282-1.868-.715-.108.28 1.868.717Zm-.026-.777-.014-.029-1.788.895.014.028 1.789-.894Zm.137.345a4.114 4.114 0 0 0-.111-.29l-1.84.784c.021.05.04.1.058.15l1.893-.644Zm.012.034-.01-.028-1.897.632.01.028 1.896-.632Zm.023.076-.014-.047-1.916.575.014.046 1.916-.574Zm.022.078-.019-.066-1.923.55.02.065 1.922-.549Zm.001 0-.014-.041-1.897.632.014.042 1.897-.632Zm-.001-.008-.019-.047-1.857.743.019.047 1.857-.743Zm.05.16-.014-.051-1.93.526.015.052 1.93-.527Zm.024.096-.018-.075-1.94.485.018.075 1.94-.485Zm.013.04-.023-.08-1.92.564.024.08 1.92-.564Zm.02.07-.014-.051-1.93.526.014.052 1.93-.527Zm.022.08-.024-.084-1.927.535.024.085 1.927-.536Zm.027.103-.024-.09-1.934.51.024.089 1.934-.51Zm.03.137-.019-.089-1.957.412.019.09 1.957-.413Zm.015.057-.024-.093-1.94.485.024.093 1.94-.485Zm.01.034-.019-.066-1.923.55.019.065 1.923-.55Zm.037.156-.023-.103-1.95.443.023.103 1.95-.443Zm.024.103-.024-.103-1.95.443.023.103 1.95-.443Zm.031.135-.033-.14-1.947.454.032.14 1.948-.454Zm.023.118-.014-.075-1.966.369.014.075 1.966-.369Zm.02.093-.024-.113-1.958.408.024.113 1.958-.408Zm.025.125-.024-.117-1.96.392.023.117 1.96-.392Zm.022.093-.028-.122-1.95.45.029.122 1.949-.45Zm.04.212-.032-.173-1.965.372.033.173 1.965-.372Zm.027.13-.028-.14-1.961.392.028.141 1.96-.392Zm.04.207-.038-.197-1.965.374.037.197 1.965-.374Zm.018.098-.019-.098-1.965.374.02.098 1.964-.374Zm.029.134-.033-.154-1.957.415.033.154 1.957-.415Zm.034.194-.028-.16-1.97.348.029.16 1.97-.348Zm.038.218-.037-.216-1.97.343.037.215 1.97-.342Zm.04.212-.042-.225-1.966.368.042.225 1.966-.368Zm.042.26-.037-.234-1.975.316.037.234 1.975-.316Zm.04.224-.043-.24-1.97.348.043.24 1.97-.348Zm.042.247-.042-.244-1.97.34.042.245 1.97-.341Zm.044.259-.043-.253-1.972.328.042.254 1.973-.33Zm.043.268-.043-.262-1.974.317.042.262 1.975-.317Zm.032.2-.033-.202-1.974.321.033.202 1.974-.321Zm.054.353-.052-.342-1.978.298.052.343 1.978-.299Zm.02.126-.023-.14-1.973.328.024.14 1.973-.328Zm.058.371-.056-.36-1.976.307.056.361 1.976-.308Zm.045.308-.043-.295-1.98.282.043.296 1.98-.283Zm.034.202-.038-.225-1.973.329.038.225 1.973-.329Zm.046.339-.042-.31-1.982.27.043.31 1.981-.27Zm.021.14-.023-.155-1.977.3.023.154 1.977-.3Zm4.804-3.938a9.771 9.771 0 0 1-5.924 3.096l.264 1.983a11.77 11.77 0 0 0 7.135-3.729l-1.475-1.35Zm.052-.057-.052.056 1.475 1.352.051-.057-1.474-1.351Zm-.468.044.24.89 1.93-.518-.238-.89-1.932.518Zm-.633-2.368.633 2.367 1.932-.516-.633-2.367-1.932.516Zm-.394-1.472.394 1.472 1.932-.517-.394-1.471-1.932.516Zm-.346-1.293.346 1.294 1.932-.518-.347-1.294-1.931.518Zm-.215-.782.216.787 1.929-.528-.216-.787-1.929.528Zm-.136-.497.136.497 1.93-.528-.137-.497-1.929.528Zm-.081-.307.08.3 1.932-.514-.08-.3-1.932.514Zm-.07-.245.075.263 1.923-.55-.075-.262-1.923.55Zm-.037-.145.028.113 1.94-.485-.028-.113-1.94.485Zm-.004-.009.018.061 1.912-.588-.019-.061-1.911.588Zm-.016-.052.01.033 1.923-.55-.01-.033-1.923.55Zm.004.013.01.028 1.897-.632-.01-.028-1.897.632Zm-1.706-2.5a5.042 5.042 0 0 1 1.7 2.48l1.91-.593a7.042 7.042 0 0 0-2.379-3.463l-1.231 1.576Zm-3.636-1.138c1.489 0 2.702.409 3.636 1.138l1.231-1.576c-1.335-1.042-3-1.562-4.867-1.562v2Zm1.706 1.22A1.75 1.75 0 0 0 16 13.75v2a.25.25 0 0 1-.177-.073l1.414-1.414Zm.513 1.238c0-.464-.185-.91-.513-1.237l-1.414 1.414a.25.25 0 0 1-.073-.177h2Zm-.513 1.238a1.75 1.75 0 0 0 .513-1.238h-2a.25.25 0 0 1 .073-.177l1.414 1.415ZM16 17.25c.464 0 .91-.184 1.237-.512l-1.414-1.415A.25.25 0 0 1 16 15.25v2Zm-1.238-.512A1.75 1.75 0 0 0 16 17.25v-2a.25.25 0 0 1 .177.073l-1.415 1.415ZM14.25 15.5c0 .464.184.91.512 1.238l1.415-1.415a.25.25 0 0 1 .073.177h-2Zm.512-1.237a1.75 1.75 0 0 0-.512 1.237h2a.25.25 0 0 1-.073.177l-1.415-1.414ZM16 13.75c-.464 0-.91.184-1.238.513l1.415 1.414a.25.25 0 0 1-.177.073v-2Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Denologo.displayName = "Denologo";

export default Denologo;
