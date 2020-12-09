import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-double_svg__a"
      d="M4 13.5l1.364-2h3.272l1.364 2h4a1.671 1.671 0 011.5 1.682V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22v-6.818A1.671 1.671 0 012 13.5h2"
    />,
    <circle className="camera-double_svg__a" cx={7.5} cy={18.5} r={3} />,
    <path
      className="camera-double_svg__a"
      d="M8.5 8.5V4.182A1.671 1.671 0 0110 2.5h2M12 2.5l1.364-2h3.272L18 2.5h4a1.671 1.671 0 011.5 1.682V11a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <circle className="camera-double_svg__a" cx={15.5} cy={7.5} r={3} />,
    <path
      className="camera-double_svg__a"
      d="M13.25 15.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M21.25 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgCameraDouble;
