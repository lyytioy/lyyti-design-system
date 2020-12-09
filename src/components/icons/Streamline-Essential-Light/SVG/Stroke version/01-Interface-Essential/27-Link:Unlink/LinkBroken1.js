import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLinkBroken1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".link-broken-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="link-broken-1_svg__a"
      d="M15 7.5h4.5a4.012 4.012 0 014 4v1a4.012 4.012 0 01-4 4H15M9 7.5H4.5a4.012 4.012 0 00-4 4v1a4.012 4.012 0 004 4H9M12 5.499v-3M15 4.999l1.5-1.5M9 4.999l-1.5-1.5M12 18.499v3M15 18.999l1.5 1.5M9 18.999l-1.5 1.5"
    />
  );

export default SvgLinkBroken1;
