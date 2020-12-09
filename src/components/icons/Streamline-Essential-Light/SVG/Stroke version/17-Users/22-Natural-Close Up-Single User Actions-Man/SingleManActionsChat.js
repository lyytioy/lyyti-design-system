import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-chat_svg__cls-1"
      d="M9.5 16.635h-9c.423-2.286.353-3.58 1.609-4.118L6.5 10.635v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v1M22.5 20.635h-4.25l-3.344 2.675a.25.25 0 01-.406-.2v-2.48h-2a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1.005zM14.5 14.635h6M14.5 17.635h4"
    />
  );

export default SvgSingleManActionsChat;
