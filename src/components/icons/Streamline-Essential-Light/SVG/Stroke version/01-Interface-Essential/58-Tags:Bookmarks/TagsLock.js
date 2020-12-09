import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-lock_svg__a"
      d="M18.342 7.212a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007z"
    />,
    <circle className="tags-lock_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <path
      className="tags-lock_svg__a"
      d="M23.042 22.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1z"
    />,
    <circle className="tags-lock_svg__a" cx={18.542} cy={19.561} r={1.25} />,
    <path className="tags-lock_svg__a" d="M21.042 14a2.5 2.5 0 10-5 0v1.5h5z" />
  );

export default SvgTagsLock;
