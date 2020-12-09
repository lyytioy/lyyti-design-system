import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="email-action-remove_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="email-action-remove_svg__a"
      d="M19.621 15.379l-4.242 4.242M19.621 19.621l-4.242-4.242M9.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v7.5"
    />,
    <path
      className="email-action-remove_svg__a"
      d="M21.067.946L11 9 .933.946"
    />
  );

export default SvgEmailActionRemove;
