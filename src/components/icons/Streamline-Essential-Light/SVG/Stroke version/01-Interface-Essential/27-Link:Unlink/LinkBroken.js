import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLinkBroken = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".link-broken_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="link-broken_svg__a"
      d="M9.5 3.999v-2.5M5 8.499H2.5M6.318 5.317L4.55 3.55M10.934 19.076l-3.4 3.4a3.508 3.508 0 01-4.949 0l-1.061-1.06a3.511 3.511 0 010-4.95l3.4-3.4M15.5 8.5h4.377a3.685 3.685 0 013.623 3.576v2a3.576 3.576 0 01-3.647 3.424H15.5"
    />
  );

export default SvgLinkBroken;
