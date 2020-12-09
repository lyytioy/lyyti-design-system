import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-horizontal_svg__a"
      d="M21.5 11.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-horizontal_svg__a"
      x={0.5}
      y={5.5}
      width={23}
      height={13}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-horizontal_svg__a"
      d="M19.5 5.5v13M4.5 5.5v13M2.5 13.5v-3M12 13.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-horizontal_svg__a"
      x={8.5}
      y={10.5}
      width={7}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-horizontal_svg__a"
      d="M9.5 10.5V10a2.5 2.5 0 015 0v.5"
    />
  );

export default SvgPhoneHorizontal;
