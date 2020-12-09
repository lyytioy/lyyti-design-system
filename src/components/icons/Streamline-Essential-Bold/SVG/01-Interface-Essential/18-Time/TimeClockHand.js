import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.115 14.635a1 1 0 00-1 1v7.25a1 1 0 002 0v-7.25a1 1 0 00-1-1zM15.615 19.385H6.49a.625.625 0 110-1.25h2.526a1 1 0 00.919-1.393 2.233 2.233 0 00-2.056-1.357H3.615a.5.5 0 00-.5.5v6.5a.5.5 0 00.5.5h10.764a2.238 2.238 0 002.236-2.236v-.264a1 1 0 00-1-1zM16.115.116a7.769 7.769 0 107.77 7.769 7.779 7.779 0 00-7.77-7.769zm0 13.538a5.769 5.769 0 115.77-5.769 5.775 5.775 0 01-5.77 5.769z" />,
    <path d="M18.577 7.135h-1.712V4.808a.75.75 0 00-1.5 0v3.077a.75.75 0 00.75.75h2.462a.75.75 0 000-1.5z" />
  );

export default SvgTimeClockHand;
