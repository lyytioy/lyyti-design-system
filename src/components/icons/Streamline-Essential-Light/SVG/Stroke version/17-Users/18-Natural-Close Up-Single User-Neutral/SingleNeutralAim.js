import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralAim = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-aim_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-aim_svg__cls-1"
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zM12 1v3.5M1 12h3.5M12 23v-3.5M23 12h-3.5"
    />,
    <path
      className="single-neutral-aim_svg__cls-1"
      d="M17.823 18.862c-1.12-.495-2.631-1.141-3.755-1.557-.926-.345-.794-1.907-.258-2.494a4.285 4.285 0 001.259-3.532A3 3 0 0012 8a3 3 0 00-3.069 3.279 4.285 4.285 0 001.259 3.532c.536.587.668 2.149-.258 2.494-1.129.418-2.645 1.067-3.755 1.557"
    />
  );

export default SvgSingleNeutralAim;
