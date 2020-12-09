import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-home_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-home_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <path
      className="email-action-home_svg__a"
      d="M9 6.632V10.5a1 1 0 001 1h4a1 1 0 001-1V6.632"
    />,
    <path
      className="email-action-home_svg__a"
      d="M8 7.507l3.012-2.636a1.5 1.5 0 011.976 0L16 7.507M13 11.5h-2v-2a1 1 0 012 0z"
    />
  );

export default SvgEmailActionHome;
