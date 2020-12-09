import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveTab = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-tab_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="remove-tab_svg__a"
      d="M17.707 17.793A2.782 2.782 0 0116 18.5H1.5a1 1 0 01-1-1v-11a1 1 0 011-1H16a2.782 2.782 0 011.707.707l5.086 5.086a1 1 0 010 1.414zM5.525 9.525l4.95 4.95M10.475 9.525l-4.95 4.95"
    />
  );

export default SvgRemoveTab;
