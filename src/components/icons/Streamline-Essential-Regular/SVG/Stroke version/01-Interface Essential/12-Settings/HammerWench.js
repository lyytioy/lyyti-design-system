import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHammerWench = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hammer-wench_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hammer-wench_svg__a"
      d="M8.307 10.422L7.259 9.378A4.543 4.543 0 011.193 3.33l1.425 1.421a1.514 1.514 0 102.144-2.138l-1.424-1.42A4.542 4.542 0 019.4 7.24l.97.967M15.319 13.136l1.422 1.418a4.543 4.543 0 016.066 6.046l-1.425-1.42a1.514 1.514 0 00-2.144 2.138l1.424 1.42a4.542 4.542 0 01-6.062-6.046l-1.422-1.418M1.445 22.6a2.233 2.233 0 010-3.167l4.695-4.686a.75.75 0 011.059 0l2.118 2.111a.746.746 0 010 1.056L4.621 22.6a2.251 2.251 0 01-3.176 0zM16.586 1.188l6.221 6.2a1.489 1.489 0 010 2.111l-2.117 2.113a1.5 1.5 0 01-2.118 0l-6.221-6.2a1.489 1.489 0 010-2.111l2.117-2.111a1.5 1.5 0 012.118-.002zM15.527 8.577l-7.369 7.126"
    />
  );

export default SvgHammerWench;
