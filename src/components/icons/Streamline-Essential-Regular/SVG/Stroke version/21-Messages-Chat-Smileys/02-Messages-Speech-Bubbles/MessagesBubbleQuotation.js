import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleQuotation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-quotation_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.475-3.083A10.5 10.5 0 1012.75.75z"
    />,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M15.006 10.5a.75.75 0 000-1.5.75.75 0 000 1.5"
    />,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M15.171 13.755a2.785 2.785 0 001.616-2.378c0-1.045-.557-2.377-1.844-2.377M9.756 10.5a.75.75 0 000-1.5.75.75 0 000 1.5"
    />,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M9.921 13.755a2.785 2.785 0 001.616-2.378C11.537 10.332 10.98 9 9.693 9"
    />
  );

export default SvgMessagesBubbleQuotation;
