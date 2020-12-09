import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoading3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="loading-3_svg__a"
      d="M22.394 16.31a11.281 11.281 0 000-8.621L17.1 10.766a5.284 5.284 0 010 2.467zM6.75 12a5.283 5.283 0 01.15-1.234L1.606 7.689a11.281 11.281 0 000 8.621L6.9 13.233A5.281 5.281 0 016.75 12zM13.5 6.968a5.236 5.236 0 012.094 1.205L20.883 5.1A11.238 11.238 0 0013.5.849zM15.594 15.826a5.238 5.238 0 01-2.094 1.206v6.118a11.238 11.238 0 007.383-4.25zM8.406 8.173a5.236 5.236 0 012.094-1.2V.849A11.238 11.238 0 003.117 5.1zM10.5 17.032a5.238 5.238 0 01-2.094-1.206L3.117 18.9a11.238 11.238 0 007.383 4.25z"
    />
  );

export default SvgLoading3;
