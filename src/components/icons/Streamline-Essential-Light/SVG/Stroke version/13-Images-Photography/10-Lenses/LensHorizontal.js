import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="lens-horizontal_svg__a"
      cx={19.5}
      cy={12}
      rx={4}
      ry={7}
    />,
    <path
      className="lens-horizontal_svg__a"
      d="M8 19c-2.21 0-4-3.134-4-7s1.79-7 4-7M17 19c-2.21 0-4-3.134-4-7s1.79-7 4-7"
    />,
    <path
      className="lens-horizontal_svg__a"
      d="M11 19c-2.21 0-4-3.134-4-7s1.79-7 4-7"
    />,
    <path
      className="lens-horizontal_svg__a"
      d="M19.5 19H7C.662 15.2.5 15.359.5 12S.7 8.782 7 5h12.5M7.703 8h6M7 12h6M7.719 16h6"
    />
  );

export default SvgLensHorizontal;
