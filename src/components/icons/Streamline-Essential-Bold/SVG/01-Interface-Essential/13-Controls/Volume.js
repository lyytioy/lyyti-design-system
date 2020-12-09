import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolume = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.5 14.251a7.5 7.5 0 107.5-7.5 7.5 7.5 0 00-7.5 7.5zm9.917-4.917a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z" />,
    <circle cx={12} cy={3.751} r={1.5} />,
    <circle cx={3} cy={9.251} r={1.5} />,
    <circle cx={21} cy={9.251} r={1.5} />,
    <circle cx={21} cy={19.251} r={1.5} />,
    <circle cx={3} cy={19.251} r={1.5} />
  );

export default SvgVolume;
