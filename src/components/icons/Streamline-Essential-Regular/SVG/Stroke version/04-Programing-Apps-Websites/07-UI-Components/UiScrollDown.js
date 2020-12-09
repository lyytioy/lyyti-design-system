import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiScrollDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-scroll-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ui-scroll-down_svg__a"
      x={1.868}
      y={0.75}
      width={20.25}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-scroll-down_svg__a"
      d="M10.183 18.783l1.956 1.467 1.957-1.467M5.781 5.25h12.717M5.781 8.25h12.717M5.781 11.25h12.717M5.781 14.25h8.315"
    />
  );

export default SvgUiScrollDown;
