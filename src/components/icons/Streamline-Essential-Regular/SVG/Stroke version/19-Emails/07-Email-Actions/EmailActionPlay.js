import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-play_svg__a"
      d="M19.5 12.88V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.63"
    />,
    <path
      className="email-action-play_svg__a"
      d="M21.284 11.465a.75.75 0 011.216.587v9.7a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-9.7a.75.75 0 011.216-.587l7.431 5.894a3 3 0 003.706 0z"
    />,
    <path
      className="email-action-play_svg__a"
      d="M10.239 12.66A.857.857 0 019 11.894V6.106a.857.857 0 011.239-.766l5.788 2.895a.855.855 0 010 1.53z"
    />
  );

export default SvgEmailActionPlay;
