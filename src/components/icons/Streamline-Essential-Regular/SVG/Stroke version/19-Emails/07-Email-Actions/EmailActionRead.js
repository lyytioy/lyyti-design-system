import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionRead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-read_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-read_svg__a"
      d="M22.5 10v11.25a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V10l8.647 6.859a3 3 0 003.706 0zM22.5 10l-8.307-7.3a3 3 0 00-4.386 0L1.5 10M15.808 15.308l2.942 2.942M8.192 15.308L5.25 18.25"
    />
  );

export default SvgEmailActionRead;
