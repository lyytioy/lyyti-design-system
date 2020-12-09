import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="loading-circle_svg__a"
      d="M12 20.498v2M21.5 12.998h-2M12 1.498v4M8.94 19.889l-.767 1.847M15.064 19.889l.762 1.847M4.5 12.998h-2M20.776 9.362l-1.847.766M5.07 15.868l-1.847.766M17.303 18.302l1.414 1.414M18.717 6.28l-1.414 1.414M15.635 4.221l-.766 1.848M8.363 4.222l.767 1.847M5.282 6.28l1.414 1.414M6.696 18.302l-1.414 1.414M18.929 15.868l1.847.766M3.223 9.362l1.847.766"
    />
  );

export default SvgLoadingCircle;
