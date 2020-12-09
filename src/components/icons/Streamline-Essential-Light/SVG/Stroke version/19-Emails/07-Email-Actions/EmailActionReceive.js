import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionReceive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-receive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-receive_svg__a"
      d="M12 23.547l11-5v-10l-11 5-11-5v10l11 5zM6 6.275L1 8.547M23 8.547l-5-2.272M12 13.547v10M12 8.547v-8"
    />,
    <path className="email-action-receive_svg__a" d="M16 4.547l-4 4-4-4" />
  );

export default SvgEmailActionReceive;
