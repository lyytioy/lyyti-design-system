import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.733 24a3.486 3.486 0 01-3.483-3.48V4.983A3.486 3.486 0 015.733 1.5H7.5a.75.75 0 010 1.5H5.733C4.64 3 3.75 3.89 3.75 4.983V18h10.5v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0112.268 24H5.733zM3.75 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3.75v1.018z" />,
    <path d="M15 13.5c-3.722 0-6.75-3.028-6.75-6.75S11.278 0 15 0s6.75 3.028 6.75 6.75S18.722 13.5 15 13.5zm0-12c-2.895 0-5.25 2.355-5.25 5.25S12.105 12 15 12s5.25-2.355 5.25-5.25S17.895 1.5 15 1.5z" />,
    <path d="M15 10.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z" />,
    <circle cx={15} cy={4.125} r={1.125} />
  );

export default SvgPhoneActionInformation;
