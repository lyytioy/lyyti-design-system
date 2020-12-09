import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-cash_svg__a"
      d="M19.031 14.5H17a1.341 1.341 0 00-.5 2.587l2.063.825a1.342 1.342 0 01-.5 2.588h-2.032M17.531 21.504v-1M17.531 14.504v-1"
    />,
    <circle className="file-code-cash_svg__a" cx={17.531} cy={17.504} r={6} />,
    <path
      className="file-code-cash_svg__a"
      d="M9.531 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-cash_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeCash;
