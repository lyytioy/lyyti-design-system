import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-down_svg__a"
      d="M16.4 7.5h5.308a.5.5 0 01.336.87l-9.707 8.824a.5.5 0 01-.672 0L1.957 8.368a.5.5 0 01.336-.87H7.6"
    />,
    <path
      className="navigation-arrows-down_svg__a"
      d="M2.293 1.5h19.414a.5.5 0 01.336.87l-9.707 8.824a.5.5 0 01-.672 0L1.957 2.368a.5.5 0 01.336-.868zM16.4 13.5h5.308a.5.5 0 01.336.87l-9.707 8.824a.5.5 0 01-.672 0l-9.708-8.826a.5.5 0 01.336-.87H7.6"
    />
  );

export default SvgNavigationArrowsDown;
