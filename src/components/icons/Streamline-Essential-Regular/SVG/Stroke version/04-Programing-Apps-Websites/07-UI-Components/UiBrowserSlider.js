import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiBrowserSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-browser-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ui-browser-slider_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="ui-browser-slider_svg__a"
      d="M7.5 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M12 22.5a.375.375 0 11-.375.375A.375.375 0 0112 22.5M16.5 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M5.707 7.5L3.75 9.75 5.707 12M18.293 7.5l1.957 2.25L18.293 12"
    />
  );

export default SvgUiBrowserSlider;
