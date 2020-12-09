import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-chat_svg__cls-1"
      d="M22.5 13.5h-8a1 1 0 00-1 1v6a1 1 0 001 1h1v2l3-2h4a1 1 0 001-1v-6a1 1 0 00-1-1zM16.5 16.5h4M16.5 18.5h3M10.5 13.5H.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.167 4.167 0 018.56 6.717c-.25.276-.343 1.751.222 1.96 2.258.837 4.018 1.414 4.224 2.323M10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124.032.063.062.128.09.194"
    />
  );

export default SvgMultipleActionsChat;
