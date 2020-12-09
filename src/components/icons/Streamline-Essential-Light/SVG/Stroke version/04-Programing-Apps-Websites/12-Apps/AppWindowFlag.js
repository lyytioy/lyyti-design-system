import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-flag_svg__a"
      d="M14.03 13.623v9.881M14.03 19.123l1.29-.43a3.684 3.684 0 013.21.43 3.688 3.688 0 003.21.43l1.29-.43v-7l-1.29.43a3.688 3.688 0 01-3.21-.43 3.684 3.684 0 00-3.21-.43l-1.29.43zM1.03 4.504h20M4.03 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.03 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.03 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-flag_svg__a"
      d="M11.03 16.5h-8a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v8"
    />
  );

export default SvgAppWindowFlag;
