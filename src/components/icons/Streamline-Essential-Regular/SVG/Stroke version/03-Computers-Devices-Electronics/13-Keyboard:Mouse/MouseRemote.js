import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouseRemote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mouse-remote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mouse-remote_svg__a"
      d="M15.167 7.572a6.5 6.5 0 00-6.329 0M16.747 4.986a9.724 9.724 0 00-9.489 0M18.31 2.429a12.687 12.687 0 00-12.615 0M12 23.25A5.249 5.249 0 016.753 18v-3A5.25 5.25 0 0112 9.75 5.251 5.251 0 0117.253 15v3A5.25 5.25 0 0112 23.25zM12.003 12.75v1.5"
    />
  );

export default SvgMouseRemote;
