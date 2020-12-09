import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiBrowserSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-browser-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ui-browser-slider_svg__a"
      x={0.5}
      y={0.75}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="ui-browser-slider_svg__a"
      d="M9 23a.25.25 0 11-.25.25A.25.25 0 019 23M12 23a.25.25 0 11-.25.25A.25.25 0 0112 23M15 23a.25.25 0 11-.25.25A.25.25 0 0115 23M5 8.75l-2 2 2 2M19 8.75l2 2-2 2"
    />
  );

export default SvgUiBrowserSlider;
