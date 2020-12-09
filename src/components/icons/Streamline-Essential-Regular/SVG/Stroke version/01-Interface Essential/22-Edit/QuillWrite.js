import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuillWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".quill-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="quill-write_svg__a"
      d="M18.748 14.249v7.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h7.5M10.979 13.007l5.834-5.834"
    />,
    <path
      className="quill-write_svg__a"
      d="M23.177.809a10.406 10.406 0 00-2.24 0l-2 3.18L17.706 1.7c-4.46 2.188-6.2 7.478-4.552 9.13C15.369 13.046 24.126 9.165 23.177.809z"
    />
  );

export default SvgQuillWrite;
