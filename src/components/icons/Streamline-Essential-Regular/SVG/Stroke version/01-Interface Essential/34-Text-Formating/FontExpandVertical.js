import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFontExpandVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".font-expand-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="font-expand-vertical_svg__a"
      d="M1.5 19.498l3 3v-5.25M7.5 19.498l-3 3M1.5 4.498l3-3v5.25M7.5 4.498l-3-3M11.759 18l4.568-13.294c.095-.278.251-.278.346 0L21.241 18M10.5 17.998h3M19.5 17.998h3M13.821 11.998h5.358"
    />
  );

export default SvgFontExpandVertical;
