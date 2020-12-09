import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCopyrightEqual = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-copyright-equal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-copyright-equal_svg__a"
      cx={8.25}
      cy={15.75}
      r={7.5}
    />,
    <path
      className="file-copyright-equal_svg__a"
      d="M5.25 14.25h6M5.25 17.25h6M3.75 5.25v-3a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06V21.75a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <path
      className="file-copyright-equal_svg__a"
      d="M23.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6"
    />
  );

export default SvgFileCopyrightEqual;
