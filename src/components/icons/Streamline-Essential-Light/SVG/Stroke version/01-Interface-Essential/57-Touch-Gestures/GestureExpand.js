import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-expand_svg__a"
      d="M8.5 16.506v-4.5a3.5 3.5 0 017 0v4.5M11.5.506v5M9 2.506l2.5-2 2.5 2M11.5 23.506v-5M9 21.506l2.5 2 2.5-2M.5 11.506h5M2.5 14.006l-2-2.5 2-2.5M23.5 11.506h-5M21.5 14.006l2-2.5-2-2.5"
    />,
    <path
      className="gesture-expand_svg__a"
      d="M13.5 12.006a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureExpand;
