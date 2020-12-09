import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain-3_svg__a"
      d="M.499 23.5V.5M.5 18.511l3.224-.992a9.827 9.827 0 018.041 1.023 9.826 9.826 0 007.849 1.08l3.053-.873a1.15 1.15 0 00.835-1.106V4.484a1.152 1.152 0 00-1.466-1.106l-2.422.692a9.822 9.822 0 01-7.849-1.08 9.83 9.83 0 00-8.042-1.023L.5 2.959z"
    />
  );

export default SvgFlagPlain3;
