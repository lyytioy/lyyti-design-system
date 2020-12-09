import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserUserHelpMessage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-user-help-message_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="browser-user-help-message_svg__a"
      d="M16.125 4.875A1.875 1.875 0 1118 6.75M18 9a.375.375 0 10.375.375A.375.375 0 0018 9"
    />,
    <path
      className="browser-user-help-message_svg__a"
      d="M21.18 10.178a5.271 5.271 0 10-7.117-.738l-.656 3.779 2.532-1.561"
    />,
    <circle
      className="browser-user-help-message_svg__a"
      cx={8.232}
      cy={15.375}
      r={3.375}
    />,
    <path
      className="browser-user-help-message_svg__a"
      d="M13.46 23.243A6.062 6.062 0 003 23.25M18 14.25v9M.75 23.25V3.75a3 3 0 013-3h7.5M.75 5.321h9"
    />
  );

export default SvgBrowserUserHelpMessage;
