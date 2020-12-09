import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M19.089 13.858l1.282 2.769h2.5A.613.613 0 0123.3 17.7l-2.166 2.135 1.2 2.761a.654.654 0 01-.931.819l-2.9-1.634-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L13.7 17.7a.613.613 0 01.429-1.07h2.495l1.285-2.769a.662.662 0 011.18-.003zM.5 13.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 1.82.674 3.318 1.181 3.937 1.826"
    />
  );

export default SvgMultipleActionsStar;
