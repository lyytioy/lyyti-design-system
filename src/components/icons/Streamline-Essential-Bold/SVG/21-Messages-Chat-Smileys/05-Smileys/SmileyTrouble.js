import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTrouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M18.5 13.75a5.75 5.75 0 010-11.5c.175 0 .349.008.52.023a11.977 11.977 0 00-14.04 0c.171-.015.345-.023.52-.023a5.75 5.75 0 11-5.35 7.857 12 12 0 1023.7 0 5.76 5.76 0 01-5.35 3.643zM9.5 18h5a1 1 0 010 2h-5a1 1 0 010-2z" />,
    <circle cx={5.5} cy={6.5} r={2} />,
    <circle cx={18.5} cy={6.5} r={2} />
  );

export default SvgSmileyTrouble;
