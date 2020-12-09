import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsTorch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-torch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="trends-torch_svg__a"
      d="M15.113 14l-1.895 8.529a1.247 1.247 0 01-2.434 0L8.889 14"
    />,
    <path
      className="trends-torch_svg__a"
      d="M19.5 11.5a11.8 11.8 0 01-7.243 3h-.516a11.81 11.81 0 01-7.243-3zM8.649 9.683A3.98 3.98 0 018 7.5a7.3 7.3 0 015.5-7 3.993 3.993 0 00-1 5 2.311 2.311 0 001-1.5A3.653 3.653 0 0116 7.5a3.987 3.987 0 01-.623 2.145M12.001 8.001v1.5"
    />
  );

export default SvgTrendsTorch;
