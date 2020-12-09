import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-clock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="phone-actions-clock-1_svg__a"
      cx={17.5}
      cy={6.497}
      r={6}
    />,
    <path
      className="phone-actions-clock-1_svg__a"
      d="M19.5 6.497h-2v-3M10.866 23.316c-2.4-2.407-1.549-4.283-.246-5.585l.841-.841a2.144 2.144 0 013.032 0l3.64 3.64a1.253 1.253 0 01-.414 2.046 12.5 12.5 0 01-16.3-16.3 1.253 1.253 0 012.046-.414L7.107 9.5a2.144 2.144 0 010 3.032l-.841.841c-1.3 1.3-3.178 2.154-5.585-.246"
    />
  );

export default SvgPhoneActionsClock1;
