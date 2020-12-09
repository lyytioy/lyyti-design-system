import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCopyrightC = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-copyright-c_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="file-copyright-c_svg__a" cx={8.25} cy={15.75} r={7.5} />,
    <path
      className="file-copyright-c_svg__a"
      d="M3.75 6.75v-4.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06V21.75a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <path
      className="file-copyright-c_svg__a"
      d="M23.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M9 18.75h-.75a3.009 3.009 0 01-3-3 3.009 3.009 0 013-3H9"
    />
  );

export default SvgFileCopyrightC;
