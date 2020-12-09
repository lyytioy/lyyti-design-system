import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiPhoneSliderVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-phone-slider-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-phone-slider-vertical_svg__a"
      d="M17.25 19.5v2.772a.931.931 0 01-.875.978h-8.75a.931.931 0 01-.875-.978V19.5"
    />,
    <path
      className="ui-phone-slider-vertical_svg__a"
      d="M10.5 19.5l1.467 1.467 1.468-1.467M6.75 4.5V1.728A.931.931 0 017.625.75h8.75a.931.931 0 01.875.978V4.5"
    />,
    <path
      className="ui-phone-slider-vertical_svg__a"
      d="M13.435 4.5l-1.468-1.467L10.5 4.5"
    />,
    <rect
      className="ui-phone-slider-vertical_svg__a"
      x={4.5}
      y={7.5}
      width={15}
      height={9}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgUiPhoneSliderVertical;
