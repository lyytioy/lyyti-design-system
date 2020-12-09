import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="award-star_svg__a" d="M3 23.25a9 9 0 0118 0z" />,
    <path
      className="award-star_svg__a"
      d="M13.085 14.322l1.392-4.177 4.11-1.369a.485.485 0 00.087-.881l-3.854-2.2v-4.46a.485.485 0 00-.791-.375L11.052 3.3 6.834 1.889a.485.485 0 00-.613.613L7.628 6.72 5.192 9.7a.485.485 0 00.375.791h4.458l2.155 3.771"
    />
  );

export default SvgAwardStar;
