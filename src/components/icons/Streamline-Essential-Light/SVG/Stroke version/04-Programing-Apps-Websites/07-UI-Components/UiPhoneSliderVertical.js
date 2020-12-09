import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiPhoneSliderVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-phone-slider-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-phone-slider-vertical_svg__a"
      d="M4.5 1.5a1 1 0 011-1h13a1 1 0 011 1M13.5 4L12 2.5 10.5 4M19.5 22.5a1 1 0 01-1 1h-13a1 1 0 01-1-1M10.5 20l1.5 1.5 1.5-1.5"
    />,
    <rect
      className="ui-phone-slider-vertical_svg__a"
      x={6.5}
      y={4.5}
      width={11}
      height={15}
      rx={1}
      ry={1}
      transform="rotate(90 12 12)"
    />
  );

export default SvgUiPhoneSliderVertical;
