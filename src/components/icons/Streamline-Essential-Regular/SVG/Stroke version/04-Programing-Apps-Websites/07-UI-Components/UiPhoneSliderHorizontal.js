import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiPhoneSliderHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-phone-slider-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-phone-slider-horizontal_svg__a"
      d="M19.5 6.75h2.772a.931.931 0 01.978.875v8.75a.931.931 0 01-.978.875H19.5"
    />,
    <path
      className="ui-phone-slider-horizontal_svg__a"
      d="M19.5 13.5l1.467-1.467-1.467-1.468M4.5 17.25H1.728a.931.931 0 01-.978-.875v-8.75a.931.931 0 01.978-.875H4.5"
    />,
    <path
      className="ui-phone-slider-horizontal_svg__a"
      d="M4.5 10.565l-1.467 1.468L4.5 13.5"
    />,
    <rect
      className="ui-phone-slider-horizontal_svg__a"
      x={7.5}
      y={4.5}
      width={9}
      height={15}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgUiPhoneSliderHorizontal;
