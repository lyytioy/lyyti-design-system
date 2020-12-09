import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionReplyAll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-reply-all_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-reply-all_svg__a"
      d="M12.75 6.837a1.5 1.5 0 00-2.6-1.018l-5.461 5.914a1.5 1.5 0 000 2.034l5.459 5.914a1.5 1.5 0 002.6-1.018V15.75h3a7.5 7.5 0 017.5 7.5v-6a7.5 7.5 0 00-7.5-7.5h-3z"
    />,
    <path
      className="email-action-reply-all_svg__a"
      d="M6.606 5.819l-5.458 5.914a1.5 1.5 0 000 2.034l5.458 5.914"
    />
  );

export default SvgEmailActionReplyAll;
