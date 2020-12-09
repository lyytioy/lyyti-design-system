import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-close_svg__a"
      d="M13 22.906a16.989 16.989 0 018.856-3.89 1.6 1.6 0 001.391-1.587V6.21a1.611 1.611 0 00-1.835-1.6A17.067 17.067 0 0013 8.442a1.636 1.636 0 01-2.006 0 17.067 17.067 0 00-8.409-3.829A1.611 1.611 0 00.75 6.21v11.219a1.6 1.6 0 001.391 1.587A16.989 16.989 0 0111 22.906a1.633 1.633 0 002 0z"
    />,
    <path
      className="book-close_svg__a"
      d="M20.02.75A17.679 17.679 0 0013 4.315a1.636 1.636 0 01-2.006 0A17.668 17.668 0 003.984.751M12 8.784v14.463"
    />
  );

export default SvgBookClose;
