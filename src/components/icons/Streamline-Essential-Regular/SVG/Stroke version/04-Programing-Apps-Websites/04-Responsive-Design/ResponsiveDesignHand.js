import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-hand_svg__a"
      d="M16.61 23.25l-3.789-3.094a1.637 1.637 0 01-.566-1.675 1.637 1.637 0 012.321-1.068L15.75 18v-5.25a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3l1.993.332a3 3 0 012.507 2.959v4.209M3.75 17.25h-1.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v1.5M.75 14.25h3M.75 3.75h10.5"
    />,
    <path
      className="responsive-design-hand_svg__a"
      d="M8.25 17.25a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M9.75 6.75v9M20.25 6.75v3"
    />
  );

export default SvgResponsiveDesignHand;
