import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSecurityUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".security-unlock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="security-unlock_svg__a"
      d="M17.5 8.5V6a5.5 5.5 0 00-11 0M2.5 13.5h19M2.5 18.5h19"
    />,
    <rect
      className="security-unlock_svg__a"
      x={2.5}
      y={8.5}
      width={19}
      height={15}
      rx={2.5}
      ry={2.5}
    />,
    <path
      className="security-unlock_svg__a"
      d="M5.25 10.75A.25.25 0 115 11a.25.25 0 01.25-.25M7.75 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.25 15.75A.25.25 0 115 16a.25.25 0 01.25-.25M7.75 15.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.25 20.75A.25.25 0 115 21a.25.25 0 01.25-.25M7.75 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSecurityUnlock;
