import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleQuotation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-quotation_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M10.639 9v3a2.007 2.007 0 01-2 2"
    />,
    <circle
      className="messages-bubble-quotation_svg__a"
      cx={8.639}
      cy={9}
      r={2}
    />,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M17.639 9v3a2.007 2.007 0 01-2 2"
    />,
    <circle
      className="messages-bubble-quotation_svg__a"
      cx={15.639}
      cy={9}
      r={2}
    />,
    <path
      className="messages-bubble-quotation_svg__a"
      d="M12.139 1C5.788 1 .639 5.253.639 10.5a8.738 8.738 0 003.4 6.741L1.639 23l6.372-3.641a13.608 13.608 0 004.128.641c6.351 0 11.5-4.253 11.5-9.5S18.49 1 12.139 1z"
    />
  );

export default SvgMessagesBubbleQuotation;
