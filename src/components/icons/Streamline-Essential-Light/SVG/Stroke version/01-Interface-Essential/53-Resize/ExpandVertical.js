import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical_svg__a"
      d="M15 3.499l-3-3-3 3M12 23.499v-23M15 20.499l-3 3-3-3"
    />
  );

export default SvgExpandVertical;
