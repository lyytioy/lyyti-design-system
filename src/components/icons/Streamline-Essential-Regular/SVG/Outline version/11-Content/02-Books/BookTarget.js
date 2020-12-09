import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.75 24c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 014.5 0h14.25c.827 0 1.5.673 1.5 1.5v8.25a.75.75 0 01-1.5 0V1.5H4.5a2.252 2.252 0 00-2.25 2.25v14.651A2.973 2.973 0 013.75 18H9a.75.75 0 010 1.5H3.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h7.5a.75.75 0 010 1.5h-7.5z" />,
    <path d="M17.25 24c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z" />,
    <circle cx={17.25} cy={18} r={1.125} />
  );

export default SvgBookTarget;
