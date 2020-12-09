import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCopyrightTm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-copyright-tm_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-copyright-tm_svg__a"
      d="M6.75 18.75v-4.5M5.25 14.25h3M15.75 18.75v-4.5L13.5 16.5l-2.25-2.25v4.5"
    />,
    <path
      className="file-copyright-tm_svg__a"
      d="M3.75 6.75v-4.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06V21.75a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <path
      className="file-copyright-tm_svg__a"
      d="M23.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M12 22.246a7.5 7.5 0 11.746-12.5"
    />
  );

export default SvgFileCopyrightTm;
