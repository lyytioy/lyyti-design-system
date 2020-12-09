import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4} cy={5} r={3} />,
    <path d="M9.5 4.25h12a1 1 0 000-2h-12a1 1 0 000 2zM16.5 7.75a1 1 0 000-2h-7a1 1 0 000 2z" />,
    <circle cx={11} cy={13} r={2} />,
    <path d="M22 11.5h-6.5a1 1 0 000 2H22a1 1 0 000-2z" />,
    <circle cx={11} cy={19} r={2} />,
    <path d="M18.5 17.5h-3a1 1 0 000 2h3a1 1 0 000-2zM6 9.5a1 1 0 00-1 1V12a1 1 0 002 0v-1.5a1 1 0 00-1-1zM6 14a1 1 0 00-1 1v1.5a1 1 0 002 0V15a1 1 0 00-1-1zM6 18.5a1 1 0 00-1 1V21a1 1 0 002 0v-1.5a1 1 0 00-1-1z" />
  );

export default SvgUiWebpageBullets;
