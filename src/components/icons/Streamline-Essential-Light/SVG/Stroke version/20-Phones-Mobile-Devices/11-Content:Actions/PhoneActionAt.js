import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-at_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-at_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-at_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3"
    />,
    <circle className="phone-action-at_svg__a" cx={12} cy={12} r={1.5} />,
    <path
      className="phone-action-at_svg__a"
      d="M13.5 12v.75A1.25 1.25 0 0014.75 14 1.25 1.25 0 0016 12.75v-.564A4.124 4.124 0 0012.1 8a4 4 0 00-1.052 7.89 4.092 4.092 0 001.977-.025"
    />
  );

export default SvgPhoneActionAt;
