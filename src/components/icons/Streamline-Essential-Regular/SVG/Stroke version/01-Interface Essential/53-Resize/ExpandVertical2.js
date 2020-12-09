import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-2_svg__a"
      d="M12.002 23.248v-8.25M12.002 8.998V.748M8.252 19.498l3.75 3.75 3.75-3.75M8.252 4.498l3.75-3.75 3.75 3.75M.752 11.998h22.5"
    />
  );

export default SvgExpandVertical2;
