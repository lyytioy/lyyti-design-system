import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-2_svg__a"
      d="M.5 23.499l23-23M5.5 23.499h-5v-5M23.5 5.499v-5h-5M.5.499l23 23M.5 5.499v-5h5M18.5 23.499h5v-5"
    />
  );

export default SvgExpand2;
