import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLockHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-lock-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-lock-horizontal_svg__a"
      d="M11 13.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-lock-horizontal_svg__a"
      x={7.5}
      y={10.5}
      width={7}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-lock-horizontal_svg__a"
      d="M8.5 10.5V10a2.5 2.5 0 015 0v.5M19.5 5.5v13M21.5 11.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-lock-horizontal_svg__a"
      x={0.5}
      y={5.5}
      width={23}
      height={13}
      rx={2}
      ry={2}
    />
  );

export default SvgPhoneLockHorizontal;
