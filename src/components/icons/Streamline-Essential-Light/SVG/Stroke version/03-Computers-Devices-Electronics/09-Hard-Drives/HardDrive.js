import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHardDrive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hard-drive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="hard-drive_svg__a"
      x={0.5}
      y={13}
      width={23}
      height={8}
      rx={2}
      ry={2}
    />,
    <path
      className="hard-drive_svg__a"
      d="M3.5 18h17M20.25 15.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M23.438 14.505l-2.459-9.624A2.5 2.5 0 0018.557 3H5.443a2.5 2.5 0 00-2.422 1.881L.562 14.505"
    />
  );

export default SvgHardDrive;
