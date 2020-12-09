import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpen1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-open-1_svg__a"
      d="M12 4.735a21.874 21.874 0 0110.477-3.2.5.5 0 01.523.5v16.212a.5.5 0 01-.479.5 21.9 21.9 0 00-9.564 2.653 1.912 1.912 0 01-.957.13M12 4.735a21.874 21.874 0 00-10.477-3.2A.5.5 0 001 2.03v16.217a.5.5 0 00.479.5 21.9 21.9 0 019.564 2.653 1.912 1.912 0 00.957.13M12 4.735V21.54"
    />,
    <path
      className="book-open-1_svg__a"
      d="M3 18.872v3.1a.5.5 0 00.609.488 38.849 38.849 0 0116.782 0 .5.5 0 00.609-.49v-3.1"
    />
  );

export default SvgBookOpen1;
