import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-share_svg__a"
      d="M3.5 2.5h16M9.5 23.5h-6a2 2 0 01-2-2v-19"
    />,
    <path
      className="book-share_svg__a"
      d="M20.5.5h-17a2 2 0 000 4h16a1 1 0 011 1V9"
    />,
    <circle className="book-share_svg__a" cx={12.747} cy={18.25} r={2.25} />,
    <circle className="book-share_svg__a" cx={20.247} cy={21.25} r={2.25} />,
    <circle className="book-share_svg__a" cx={20.247} cy={13.75} r={2.25} />,
    <path
      className="book-share_svg__a"
      d="M14.672 17.095l3.65-2.19M14.835 19.085l3.324 1.33"
    />
  );

export default SvgBookShare;
