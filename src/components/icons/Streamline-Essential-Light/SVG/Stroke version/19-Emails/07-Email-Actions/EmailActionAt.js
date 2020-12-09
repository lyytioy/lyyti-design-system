import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-at_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-at_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <circle className="email-action-at_svg__a" cx={12} cy={8} r={1.5} />,
    <path
      className="email-action-at_svg__a"
      d="M13.5 8v.75A1.25 1.25 0 0014.75 10 1.25 1.25 0 0016 8.75v-.564A4.124 4.124 0 0012.1 4a4 4 0 00-1.052 7.89 4.092 4.092 0 001.977-.025"
    />
  );

export default SvgEmailActionAt;
