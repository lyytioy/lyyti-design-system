import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyUnhappyAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />,
    <circle cx={8} cy={9} r={2} />,
    <circle cx={16} cy={9} r={2} />,
    <path d="M17.215 14.186a8 8 0 00-7.842 2.671 1 1 0 101.527 1.286 6 6 0 015.881-2 1 1 0 10.43-1.953z" />
  );

export default SvgSmileyUnhappyAlternate;
