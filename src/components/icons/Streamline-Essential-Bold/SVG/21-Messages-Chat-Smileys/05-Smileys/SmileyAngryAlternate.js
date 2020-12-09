import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyAngryAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />,
    <circle cx={7.5} cy={10.5} r={1.5} />,
    <circle cx={16.5} cy={10.5} r={1.5} />,
    <path d="M12 13a2.5 2.5 0 00-2.5 2.5v2a2.5 2.5 0 005 0v-2A2.5 2.5 0 0012 13zM12 9a6.485 6.485 0 005.448-2.953 1 1 0 00-1.676-1.094 4.5 4.5 0 01-7.544 0 1 1 0 00-1.676 1.094A6.485 6.485 0 0012 9z" />
  );

export default SvgSmileyAngryAlternate;
