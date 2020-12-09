import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHammer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hammer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hammer-1_svg__a"
      d="M13.631 13.206l-9.707 9.706a2.006 2.006 0 01-2.837-2.837l9.707-9.706"
    />,
    <path
      className="hammer-1_svg__a"
      d="M22.142 9.659a.5.5 0 00-.709 0 1.5 1.5 0 01-2.465-1.614 1 1 0 00-.223-1.076c-.826-.828-2.275-2.276-2.293-2.258a7.319 7.319 0 00-9.41-.4.5.5 0 00.321.9A5.487 5.487 0 0111.5 6.822c.689.69 1.32 1.519.63 2.208l-1.339 1.339 2.837 2.837 1.418-1.419a1.5 1.5 0 112.128 2.128.5.5 0 000 .709l1.064 1.064a1 1 0 001.419 0l3.546-3.546a1 1 0 000-1.419zM21.433 9.66l-4.256 4.255"
    />
  );

export default SvgHammer1;
