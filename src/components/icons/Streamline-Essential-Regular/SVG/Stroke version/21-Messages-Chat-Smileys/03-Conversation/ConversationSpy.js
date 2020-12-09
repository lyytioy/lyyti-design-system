import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSpy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-spy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-spy_svg__a"
      d="M14.25 6.141a2.014 2.014 0 01-1.631 2.081L6.509 9a.423.423 0 01-.356-.13A.561.561 0 016 8.477v-7.2a.561.561 0 01.153-.39.423.423 0 01.356-.13l6.11.775a2.014 2.014 0 011.631 2.077zM9.75 17.859a2.014 2.014 0 011.631-2.081l6.11-.778a.423.423 0 01.356.13.558.558 0 01.153.39v7.2a.556.556 0 01-.153.39.423.423 0 01-.356.13l-6.11-.775a2.014 2.014 0 01-1.631-2.074z"
    />,
    <path
      className="conversation-spy_svg__a"
      d="M9.75 19.5H4.5a3.75 3.75 0 01-3.75-3.75A3.75 3.75 0 014.5 12h15a3.75 3.75 0 003.75-3.75A3.75 3.75 0 0019.5 4.5h-5.25M.75 4.5h2.935M.75.75l3 .75M.75 8.25l3-.75M23.25 19.5h-2.935M23.25 23.25l-3-.75M23.25 15.75l-3 .75"
    />
  );

export default SvgConversationSpy;
