import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonFastForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-fast-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="button-fast-forward_svg__a"
      cx={12}
      cy={11.999}
      r={11.5}
    />,
    <path
      className="button-fast-forward_svg__a"
      d="M7.5 9.5a.274.274 0 01.44-.263l4.56 2.455V9.5a.274.274 0 01.44-.263l5.62 3.026c.242.13.242.343 0 .474l-5.62 3.026a.274.274 0 01-.44-.263v-2.193l-4.56 2.455a.274.274 0 01-.44-.262z"
    />
  );

export default SvgButtonFastForward;
