import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorDoubleClick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-double-click_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-double-click_svg__a"
      d="M12 15.5A2.5 2.5 0 118.5 12M8.5 4.626A9.5 9.5 0 1019.379 15.5M8.5 8.188a6 6 0 107.313 7.31"
    />,
    <path
      className="cursor-double-click_svg__a"
      d="M20.674.5l-6.793 6.632-1.547-1.387a.5.5 0 00-.834.373V12a.5.5 0 00.5.5h5.838a.5.5 0 00.363-.843l-1.573-1.665L23.5 3.3"
    />
  );

export default SvgCursorDoubleClick;
