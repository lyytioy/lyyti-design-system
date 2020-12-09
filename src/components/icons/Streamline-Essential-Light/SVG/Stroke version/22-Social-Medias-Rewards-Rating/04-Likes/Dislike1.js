import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDislike1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dislike-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="dislike-1_svg__a"
      d="M4 8.341a1.5 1.5 0 010-3h1a1.5 1.5 0 01-1.5-1.5c0-.829.672-1 1.5-1h6.5c2.851 0 3.5.5 7 1v8.5c-2.45 0-6.5 4.5-6.5 8.5 0 1.581-2.189 2.17-3-.719-.5-1.781 1-5.281 1-5.281H2a1.5 1.5 0 01-1.5-1.5c0-.829.672-2 1.5-2h1a1.5 1.5 0 010-3h1M18.5 1.841h5v12h-5zM20.75 4.341"
    />,
    <path
      className="dislike-1_svg__a"
      d="M20.75 4.341a.25.25 0 10-.25-.25.25.25 0 00.25.25"
    />
  );

export default SvgDislike1;
