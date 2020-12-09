import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="scroll-vertical_svg__a" cx={12} cy={11.998} r={2.25} />,
    <path
      className="scroll-vertical_svg__a"
      d="M6 6.308l5.25-5.25a1.061 1.061 0 011.5 0L18 6.308M18 17.687l-5.25 5.25a1.061 1.061 0 01-1.5 0L6 17.687"
    />
  );

export default SvgScrollVertical;
