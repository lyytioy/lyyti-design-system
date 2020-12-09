import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-ring_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-ring_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-ring_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M12 8a2.5 2.5 0 012.5 2.5v2a1 1 0 001 1h-7a1 1 0 001-1v-2A2.5 2.5 0 0112 8zM12 15a.25.25 0 11-.25.25A.25.25 0 0112 15"
    />
  );

export default SvgPhoneActionRing;
