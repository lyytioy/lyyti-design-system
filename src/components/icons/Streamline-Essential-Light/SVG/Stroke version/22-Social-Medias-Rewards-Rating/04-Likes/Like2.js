import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLike2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-2_svg__a"
      d="M.5 8.372h2a1 1 0 011 1v12a1 1 0 01-1 1h-2M3.5 19.372c7.339 3.726 6.981 3.235 13.265 3.235 2.632 0 3.958-1.715 4.732-4.228v-.016l1.907-6.4v-.012A2 2 0 0021.5 9.372h-4.9a2 2 0 01-1.934-2.51l.882-3.344a1.713 1.713 0 00-3.06-1.418L7.6 9.025a2 2 0 01-1.634.847H3.5"
    />
  );

export default SvgLike2;
