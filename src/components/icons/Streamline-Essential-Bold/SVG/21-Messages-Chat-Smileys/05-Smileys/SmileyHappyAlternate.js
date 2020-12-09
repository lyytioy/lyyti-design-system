import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHappyAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />,
    <path d="M16.561 14.5H7.438a.432.432 0 00-.379.25.557.557 0 000 .5A5.62 5.62 0 0012 18.5a5.622 5.622 0 004.941-3.25.557.557 0 000-.5.431.431 0 00-.38-.25z" />,
    <circle cx={8} cy={9} r={2} />,
    <circle cx={16} cy={9} r={2} />
  );

export default SvgSmileyHappyAlternate;
