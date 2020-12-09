import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHardDrive1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hard-drive-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hard-drive-1_svg__a"
      d="M23.5 15.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-5h23zM.5 10.5l5.707-5.707a1 1 0 01.707-.293h10.172a1 1 0 01.707.293L23.5 10.5"
    />,
    <circle className="hard-drive-1_svg__a" cx={3.5} cy={14.5} r={1} />,
    <path
      className="hard-drive-1_svg__a"
      d="M2.5 17.5v1M21.5 17.5v1M14 14.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M17 14.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M20 14.5a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgHardDrive1;
