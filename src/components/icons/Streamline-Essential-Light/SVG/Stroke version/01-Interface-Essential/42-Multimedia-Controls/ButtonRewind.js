import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRewind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-rewind_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="button-rewind_svg__a" cx={12} cy={11.999} r={11.5} />,
    <path
      className="button-rewind_svg__a"
      d="M16.5 9.5a.274.274 0 00-.44-.263l-4.56 2.454V9.5a.274.274 0 00-.44-.263l-5.62 3.025c-.242.13-.242.343 0 .474l5.62 3.026a.274.274 0 00.44-.263v-2.192l4.56 2.455a.274.274 0 00.44-.263z"
    />
  );

export default SvgButtonRewind;
