import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-brightness_svg__a"
      d="M19.491 15.106l2.4-2.4a1 1 0 000-1.414l-2.4-2.4V5.5a1 1 0 00-1-1H15.1l-2.4-2.4a1 1 0 00-1.414 0l-2.4 2.4H5.491a1 1 0 00-1 1v3.394l-2.4 2.4a1 1 0 000 1.414l2.4 2.4V18.5a1 1 0 001 1h3.394l2.4 2.4a1 1 0 001.414 0l2.4-2.4h4.394z"
    />,
    <circle
      className="light-mode-brightness_svg__a"
      cx={11.991}
      cy={12}
      r={6}
    />
  );

export default SvgLightModeBrightness;
