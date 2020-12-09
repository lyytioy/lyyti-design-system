import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVerticalLeftRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-left-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-left-right_svg__a"
      d="M23.251 14.248H.751M23.251 9.748H.751M12.001.748v9M12.001 14.248v9M15.751 4.498l-3.75-3.75-3.75 3.75M15.751 19.498l-3.75 3.75-3.75-3.75"
    />
  );

export default SvgExpandVerticalLeftRight;
