import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvFlatScreen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-flat-screen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-flat-screen_svg__a"
      x={0.5}
      y={3.75}
      width={23}
      height={13.5}
      rx={0.5}
      ry={0.5}
    />,
    <path className="modern-tv-flat-screen_svg__a" d="M12 17.25v3M7 20.25h10" />
  );

export default SvgModernTvFlatScreen;
