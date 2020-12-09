import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-star_svg__a"
      d="M18.284 21.533a1 1 0 00-1-1h-10a1 1 0 00-1 1v2h12zM16.284 20.533v-4a1.35 1.35 0 00-.97-1.242l-3.03-.758-3.03.758a1.349 1.349 0 00-.97 1.242v4M7.633 1.884l3.612 1.436 2.118-2.12a.735.735 0 011.273.541l-.2 3.476L17.8 6.544a.784.784 0 01-.1 1.484L13.853 9.1l-1.074 3.85a.784.784 0 01-1.484.1L9.97 9.685l-3.474.2a.735.735 0 01-.545-1.272L8.069 6.5 6.634 2.883a.8.8 0 01.999-.999z"
    />
  );

export default SvgAwardStar;
