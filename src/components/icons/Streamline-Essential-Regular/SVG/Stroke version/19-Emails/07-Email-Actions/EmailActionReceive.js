import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionReceive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-receive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-receive_svg__a"
      d="M12 .75v9.75M8.25 7.5l3.75 3 3.75-3M12 23.25l-10.5-6v-9l10.5 6v9zM22.5 17.25l-10.5 6v-9l10.5-6v9z"
    />,
    <path
      className="email-action-receive_svg__a"
      d="M14.995 4.497L22.5 8.25l-10.5 6-10.5-6L9 4.5"
    />
  );

export default SvgEmailActionReceive;
