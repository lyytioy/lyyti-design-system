import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-open_svg__a"
      d="M13 22.906a16.989 16.989 0 018.856-3.89 1.6 1.6 0 001.391-1.587V2.365a1.613 1.613 0 00-1.835-1.6A17.077 17.077 0 0013 4.6a1.636 1.636 0 01-2 0A17.077 17.077 0 002.585.767 1.613 1.613 0 00.75 2.365v15.064a1.6 1.6 0 001.391 1.587A16.989 16.989 0 0111 22.906a1.633 1.633 0 002 0zM12 4.938v18.311"
    />
  );

export default SvgBookOpen;
