import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLinkBroken2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".link-broken-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="link-broken-2_svg__a"
      d="M9 9V4a3.5 3.5 0 017 0v5a3.5 3.5 0 01-3.5 3.5"
    />,
    <path
      className="link-broken-2_svg__a"
      d="M16 14v5a3.5 3.5 0 01-7 0v-5a3.5 3.5 0 013.5-3.5M5.438 6.999l1.299.75M4.5 10.499H6M5.438 13.999l1.299-.75M19.562 13.999l-1.299-.75M20.5 10.499H19M19.562 6.999l-1.299.75"
    />
  );

export default SvgLinkBroken2;
