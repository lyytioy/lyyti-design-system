import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".kindle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="kindle_svg__a"
      x={5.5}
      y={2.5}
      width={13}
      height={15}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="kindle_svg__a"
      d="M2.5 9.5h3M2.5 12.5h3M2.5 15.5h3M18.5 9.5h3M18.5 12.5h3M18.5 15.5h3"
    />,
    <rect
      className="kindle_svg__a"
      x={2.5}
      y={0.5}
      width={19}
      height={23}
      rx={2}
      ry={2}
    />,
    <rect
      className="kindle_svg__a"
      x={10.5}
      y={19.5}
      width={3}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="kindle_svg__a"
      d="M9 6.5h6M9 9.5h6M9 12.5h4M8.25 20.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.75 20.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgKindle;
