import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-image_svg__a"
      d="M7.694 14l2.451-3.151a1 1 0 011.274-.206L13.194 12l1.663-2.14a1 1 0 011.588.067L19.194 14z"
    />,
    <circle
      className="messages-bubble-image_svg__a"
      cx={9.194}
      cy={6.501}
      r={1.5}
    />,
    <path
      className="messages-bubble-image_svg__a"
      d="M12.194 1C5.843 1 .694 5.253.694 10.5a8.738 8.738 0 003.4 6.741L1.694 23l6.373-3.641a13.6 13.6 0 004.127.641c6.352 0 11.5-4.253 11.5-9.5S18.546 1 12.194 1z"
    />
  );

export default SvgMessagesBubbleImage;
