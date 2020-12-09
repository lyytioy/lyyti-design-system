import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRemoveUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-remove-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-remove-user_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-remove-user_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-remove-user_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M13 13.5h2.5"
    />,
    <circle
      className="phone-action-remove-user_svg__a"
      cx={12}
      cy={8.75}
      r={1.75}
    />,
    <path
      className="phone-action-remove-user_svg__a"
      d="M13.433 11.306A3.5 3.5 0 008.5 14.5v1h5"
    />
  );

export default SvgPhoneActionRemoveUser;
