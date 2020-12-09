import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrinkVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shrink-vertical_svg__a"
      d="M23.251.748H.751M23.251 23.248H.751M12.001 14.248v9M12.001.748v9M15.751 17.998l-3.75-3.75-3.75 3.75M15.751 5.998l-3.75 3.75-3.75-3.75"
    />
  );

export default SvgShrinkVertical;
