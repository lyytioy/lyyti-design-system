import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionReplyAll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-reply-all_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-reply-all_svg__a"
      d="M12.5 8.454s11-.5 11 11c-4-7.5-11-5-11-5v4l-8.5-7 8.5-7z"
    />,
    <path
      className="email-action-reply-all_svg__a"
      d="M9 18.454l-8.5-7 8.5-7"
    />
  );

export default SvgEmailActionReplyAll;
