import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuillWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".quill-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="quill-write_svg__a"
      d="M19.5 13v9.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-19a1 1 0 011-1H12M7.5 16.5l9-9"
    />,
    <path
      className="quill-write_svg__a"
      d="M14.5 3.5c-1 .124-6.514 5.488-3 9 1.228 1.229 3.938 1 7.243-2.3S23.5.5 23.5.5a27.1 27.1 0 00-6.21 1.762S16.5 6 14.5 6z"
    />
  );

export default SvgQuillWrite;
