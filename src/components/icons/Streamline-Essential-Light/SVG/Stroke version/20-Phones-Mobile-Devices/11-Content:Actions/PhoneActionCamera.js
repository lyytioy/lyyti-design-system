import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-camera_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-camera_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-camera_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M16.5 10.5l-2.5.667V10.5a1 1 0 00-1-1H8.5a1 1 0 00-1 1v4a1 1 0 001 1H13a1 1 0 001-1v-.667l2.5.667z"
    />
  );

export default SvgPhoneActionCamera;