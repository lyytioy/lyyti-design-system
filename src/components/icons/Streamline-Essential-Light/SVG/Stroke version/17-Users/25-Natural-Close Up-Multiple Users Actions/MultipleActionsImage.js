import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-image_svg__cls-1"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-image_svg__cls-1"
      d="M23.5 21.5l-2.137-2.138a1 1 0 00-1.54.153L18.5 21.5l-1.157-1.157a1 1 0 00-1.527.133l-1.955 2.793M17 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 13.5H.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.258.837 4.02 1.414 4.224 2.321M10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124.033.066.064.134.094.2"
    />
  );

export default SvgMultipleActionsImage;
