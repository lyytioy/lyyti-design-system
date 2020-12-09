import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-upload_svg__a"
      d="M9.75 23.25h-6A2.25 2.25 0 011.5 21M19.5 8.25V1.5a.75.75 0 00-.75-.75H4.5a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H7.5"
    />,
    <circle className="book-upload_svg__a" cx={16.5} cy={17.25} r={6} />,
    <path
      className="book-upload_svg__a"
      d="M16.5 20.25v-6M16.5 14.25l-2.25 2.25M16.5 14.25l2.25 2.25"
    />
  );

export default SvgBookUpload;
