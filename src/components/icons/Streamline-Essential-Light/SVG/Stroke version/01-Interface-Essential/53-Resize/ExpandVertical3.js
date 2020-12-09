import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-3_svg__a"
      d="M17 12.499H7.5M12 23.499v-8M9 20.499l3 3 3-3M12 .499v8M9 3.499l3-3 3 3"
    />
  );

export default SvgExpandVertical3;
