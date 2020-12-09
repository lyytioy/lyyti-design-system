import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTags = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags_svg__a"
      d="M23.5 15.223L15.722 23a1 1 0 01-1.415 0L1.215 9.908A2.783 2.783 0 01.507 8.2L.5 1.707a1 1 0 011-1h6.492a2.777 2.777 0 011.708.707z"
    />,
    <circle className="tags_svg__a" cx={5.5} cy={5.707} r={2} />
  );

export default SvgTags;
