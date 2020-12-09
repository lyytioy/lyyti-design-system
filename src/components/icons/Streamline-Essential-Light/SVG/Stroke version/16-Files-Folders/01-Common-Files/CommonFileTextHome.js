import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-home_svg__a"
      d="M4.5 8.5H14M4.5 11.5h8M4.5 5.5h7M4.5 14.5h5M4.5 17.5h3M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V10.5"
    />,
    <path
      className="common-file-text-home_svg__a"
      d="M12.5 16.308V22.5a1 1 0 001 1h7a1 1 0 001-1v-6.192"
    />,
    <path
      className="common-file-text-home_svg__a"
      d="M10.5 18l5.854-4.953a1 1 0 011.292 0L23.5 18M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgCommonFileTextHome;
