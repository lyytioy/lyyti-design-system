import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-edit_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-edit_svg__a"
      d="M18.342 7.212a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007z"
    />,
    <circle className="tags-edit_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <path
      className="tags-edit_svg__a"
      d="M15.242 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3z"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      d="M18.521 13.019l3 3"
    />,
    <path className="tags-edit_svg__a" d="M12.242 19.298l3 3" />
  );

export default SvgTagsEdit;
