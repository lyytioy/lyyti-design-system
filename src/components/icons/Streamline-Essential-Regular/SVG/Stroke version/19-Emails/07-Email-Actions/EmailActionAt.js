import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-at_svg__a"
      d="M19.5 12.88V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.63"
    />,
    <path
      className="email-action-at_svg__a"
      d="M21.284 11.465a.75.75 0 011.216.587v9.7a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-9.7a.75.75 0 011.216-.587l7.431 5.894a3 3 0 003.706 0zM13.5 12.494a4.5 4.5 0 113-4.244"
    />,
    <circle className="email-action-at_svg__a" cx={12} cy={8.25} r={1.5} />,
    <path className="email-action-at_svg__a" d="M13.5 8.25a1.5 1.5 0 003 0" />
  );

export default SvgEmailActionAt;
