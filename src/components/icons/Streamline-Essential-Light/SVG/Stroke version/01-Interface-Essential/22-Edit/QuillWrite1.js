import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuillWrite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".quill-write-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="quill-write-1_svg__a"
      d="M16.5 2.273L17 5l-2.965-.988c-.18.161-.368.31-.54.483A14.2 14.2 0 009.5 14.5a14.2 14.2 0 0010-3.995A14.2 14.2 0 0023.5.5a14.736 14.736 0 00-7 1.773z"
    />,
    <path
      className="quill-write-1_svg__a"
      d="M20.5 14v8.5a1 1 0 01-1 1h-18a1 1 0 01-1-1v-18a1 1 0 011-1H10M16.22 7.78L5.5 18.5"
    />
  );

export default SvgQuillWrite1;
