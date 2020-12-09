import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionAddUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-add-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-add-user_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-add-user_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-add-user_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M14.5 11.5v4M12.5 13.5h4"
    />,
    <circle
      className="phone-action-add-user_svg__a"
      cx={11}
      cy={8.75}
      r={1.75}
    />,
    <path
      className="phone-action-add-user_svg__a"
      d="M12.491 11.332A3.5 3.5 0 007.5 14.5v1h5"
    />
  );

export default SvgPhoneActionAddUser;
