import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFontExpandVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".font-expand-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="font-expand-vertical_svg__a"
      d="M5.5 2.498l-2-2v6M1.5 2.498l2-2M5.5 20.498l-2 2v-6M1.5 20.498l2 2M10.375 18.5l4.652-13.617a.5.5 0 01.946 0L20.625 18.5M8.5 18.498h4M18.5 18.498h4M12.425 12.498h6.15"
    />
  );

export default SvgFontExpandVertical;
