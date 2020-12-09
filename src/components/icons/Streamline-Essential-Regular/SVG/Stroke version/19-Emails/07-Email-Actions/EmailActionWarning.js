import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-warning_svg__a"
      d="M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="email-action-warning_svg__a"
      d="M23.063 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0z"
    />,
    <path
      className="email-action-warning_svg__a"
      d="M9.75 15.75h-7.5a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v8.25"
    />,
    <path
      className="email-action-warning_svg__a"
      d="M21.411 1.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.089 1.3"
    />
  );

export default SvgEmailActionWarning;
