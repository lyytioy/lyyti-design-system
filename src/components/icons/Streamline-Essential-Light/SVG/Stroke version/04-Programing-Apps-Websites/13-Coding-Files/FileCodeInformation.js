import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-information_svg__a"
      cx={17.542}
      cy={17.504}
      r={6}
    />,
    <path
      className="file-code-information_svg__a"
      d="M17.542 20.5V17a.5.5 0 00-.5-.5h-1M16.792 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.042 20.504h3M10.542 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.542 5.504v4M12.542 5.504v4M9.542 12.504v4M15.542 5.504v4"
    />,
    <path
      className="file-code-information_svg__a"
      d="M8.042 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zM5.042 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeInformation;
