import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentBanjo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-banjo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="instrument-banjo_svg__a" d="M5.278 16.738l2.028 2.014" />,
    <circle
      className="instrument-banjo_svg__a"
      cx={7.299}
      cy={16.701}
      r={6.549}
    />,
    <path
      className="instrument-banjo_svg__a"
      d="M12.844 13.214l5.261-5.26.514.514a.728.728 0 001.029 0l3.087-3.087a.726.726 0 000-1.029l-3.087-3.087a.726.726 0 00-1.029 0l-3.087 3.087a.728.728 0 000 1.029l.514.514-5.26 5.261M18.105 1.779L17.075.75M16.046 3.837l-1.029-1.029M23.25 6.925l-1.029-1.03M21.192 8.983l-1.029-1.029"
    />
  );

export default SvgInstrumentBanjo;
