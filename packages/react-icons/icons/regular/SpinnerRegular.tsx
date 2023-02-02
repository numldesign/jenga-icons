import * as React from "react";
import { SVGProps } from "react";
const SpinnerRegular = (props: SVGProps<SVGSVGElement>) => <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 4v4m8.485-.485-2.828 2.828M28 16h-4m.485 8.485-2.828-2.828M16 28v-4m-8.485.485 2.828-2.828M4 16h4m-.485-8.485 2.828 2.828" stroke="#1C1B1F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export { SpinnerRegular };