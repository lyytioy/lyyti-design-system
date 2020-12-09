import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-sync_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-sync_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-sync_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M10.5 13H8v2.5M15.611 13.489A3.714 3.714 0 018.452 13M13.5 11H16V8.5M8.389 10.511a3.714 3.714 0 017.159.489"
    />
  );

export default SvgPhoneActionSync;
