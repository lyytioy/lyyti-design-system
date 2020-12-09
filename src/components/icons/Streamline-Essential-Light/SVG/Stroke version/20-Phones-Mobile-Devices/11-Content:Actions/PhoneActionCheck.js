import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-check_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="phone-action-check_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-check_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M16 12a4 4 0 11-4-4"
    />,
    <path
      className="phone-action-check_svg__a"
      d="M16 9l-3.646 3.646a.5.5 0 01-.708 0L10.5 11.5"
    />
  );

export default SvgPhoneActionCheck;
