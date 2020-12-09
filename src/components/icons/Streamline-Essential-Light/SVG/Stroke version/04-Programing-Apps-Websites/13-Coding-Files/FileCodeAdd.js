import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="file-code-add_svg__a" cx={17.531} cy={17.504} r={6} />,
    <path
      className="file-code-add_svg__a"
      d="M17.531 14.504v6M20.531 17.504h-6M9.531 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-add_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeAdd;
