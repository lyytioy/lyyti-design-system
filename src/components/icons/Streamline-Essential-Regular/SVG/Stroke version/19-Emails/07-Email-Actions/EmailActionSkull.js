import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-skull_svg__a"
      d="M19.5 12.88V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.63"
    />,
    <path
      className="email-action-skull_svg__a"
      d="M21.284 11.465a.75.75 0 011.216.587v9.7a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-9.7a.75.75 0 011.216-.587l7.431 5.894a3 3 0 003.706 0z"
    />,
    <path
      className="email-action-skull_svg__a"
      d="M9 12.75V10.5l-.158-.079A2.426 2.426 0 017.5 8.25a4.5 4.5 0 019 0 2.426 2.426 0 01-1.342 2.171L15 10.5v2.25M12 11.25v1.5M10.125 7.5"
    />,
    <path
      className="email-action-skull_svg__a"
      d="M10.125 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M13.875 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgEmailActionSkull;
