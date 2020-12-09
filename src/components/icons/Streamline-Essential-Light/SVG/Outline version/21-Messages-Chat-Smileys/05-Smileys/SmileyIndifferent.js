import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyIndifferent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={8.5} cy={8} r={0.75} />,
    <circle cx={15.5} cy={8} r={0.75} />,
    <path d="M5.5 16a.5.5 0 010-1h13a.5.5 0 010 1h-13z" />
  );

export default SvgSmileyIndifferent;
