import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperReadWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-read-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-read-woman_svg__a"
      d="M7.243 9.044A4.986 4.986 0 017 7.5v-2a5 5 0 0110 0v2a4.987 4.987 0 01-.276 1.643"
    />,
    <path
      className="newspaper-read-woman_svg__a"
      d="M7 6s2 .5 4-2c0 0 1.5 2 6 2M9.5 7.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.5 7.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M2.5 16.5v3.729a1 1 0 00.746.967L12 23.5v-11L3.8 9.911a1 1 0 00-1.3.953V12.5M12 12.5l8.2-2.589a1 1 0 011.3.953V12.5M21.5 16.5v3.729a1 1 0 01-.746.967L12 23.5"
    />,
    <path
      className="newspaper-read-woman_svg__a"
      d="M.5 14.5c0 1.5 1.4 2 2.5 2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5c-1.1 0-2.5.5-2.5 2zM23.5 14.5c0 1.5-1.395 2-2.5 2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5c1.105 0 2.5.5 2.5 2z"
    />
  );

export default SvgNewspaperReadWoman;
