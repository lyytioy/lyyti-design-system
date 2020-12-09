import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-double_svg__a"
      d="M21 16a1 1 0 010 1.415L15.415 23A1 1 0 0114 23L1.415 10.414a2.782 2.782 0 01-.707-1.707v-5a1 1 0 011-1h5a2.782 2.782 0 011.707.707z"
    />,
    <path
      className="tags-double_svg__a"
      d="M3.708.707h6.171a2 2 0 011.414.585L23 13a1 1 0 010 1.415l-.293.293"
    />,
    <circle className="tags-double_svg__a" cx={5.208} cy={7.207} r={1.5} />
  );

export default SvgTagsDouble;
