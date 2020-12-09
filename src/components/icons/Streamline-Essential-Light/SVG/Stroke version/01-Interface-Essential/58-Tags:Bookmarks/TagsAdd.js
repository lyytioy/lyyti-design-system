import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-add_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-add_svg__a"
      d="M16.542 9.049l1.8-1.837a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.05-1.072"
    />,
    <circle className="tags-add_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <circle
      cx={17.042}
      cy={17.498}
      r={6}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
    />,
    <path className="tags-add_svg__a" d="M17.042 14.498v6M20.042 17.498h-6" />
  );

export default SvgTagsAdd;
