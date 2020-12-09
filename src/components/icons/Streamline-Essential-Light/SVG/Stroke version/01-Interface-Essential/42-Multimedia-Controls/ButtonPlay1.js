import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPlay1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-play-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="button-play-1_svg__a" cx={12} cy={11.999} r={11.5} />,
    <path
      className="button-play-1_svg__a"
      d="M9.224 16.137a.5.5 0 01-.724-.447V8.308a.5.5 0 01.724-.447l7.382 3.691a.5.5 0 010 .894z"
    />
  );

export default SvgButtonPlay1;
