import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="scroll-vertical_svg__a" cx={12} cy={11.998} r={2} />,
    <path
      className="scroll-vertical_svg__a"
      d="M6.5 6.084l4.793-4.793a1 1 0 011.414 0L17.5 6.084M6.5 17.912l4.793 4.793a1 1 0 001.414 0l4.793-4.793"
    />
  );

export default SvgScrollVertical;
