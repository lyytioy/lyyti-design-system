import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiBrowserSlider1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-browser-slider-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ui-browser-slider-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="ui-browser-slider-1_svg__a"
      d="M9 19.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 19.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M15 19.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.015 8.5l-2 2 2 2M19.015 8.5l2 2-2 2"
    />
  );

export default SvgUiBrowserSlider1;
