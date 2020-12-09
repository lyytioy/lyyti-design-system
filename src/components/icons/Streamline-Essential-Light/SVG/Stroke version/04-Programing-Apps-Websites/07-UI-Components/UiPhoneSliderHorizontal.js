import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiPhoneSliderHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-phone-slider-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-phone-slider-horizontal_svg__a"
      d="M22.5 4.5a1 1 0 011 1v13a1 1 0 01-1 1M20 13.5l1.5-1.5-1.5-1.5M1.5 19.5a1 1 0 01-1-1v-13a1 1 0 011-1M4 10.5L2.5 12 4 13.5"
    />,
    <rect
      className="ui-phone-slider-horizontal_svg__a"
      x={6.5}
      y={4.5}
      width={11}
      height={15}
      rx={1}
      ry={1}
      transform="rotate(180 12 12)"
    />
  );

export default SvgUiPhoneSliderHorizontal;
