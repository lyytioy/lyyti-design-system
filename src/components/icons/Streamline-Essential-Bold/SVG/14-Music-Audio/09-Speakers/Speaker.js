import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeaker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.5 0h-17A3.5 3.5 0 000 3.5v17A3.5 3.5 0 003.5 24h17a3.5 3.5 0 003.5-3.5v-17A3.5 3.5 0 0020.5 0zm-17 2A1.5 1.5 0 112 3.5 1.5 1.5 0 013.5 2zm0 17A1.5 1.5 0 112 20.5 1.5 1.5 0 013.5 19zm.5-7a8 8 0 118 8 8 8 0 01-8-8zm16.5 7a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm0-14A1.5 1.5 0 1122 3.5 1.5 1.5 0 0120.5 5z" />,
    <circle cx={12} cy={12} r={2} />
  );

export default SvgSpeaker;
