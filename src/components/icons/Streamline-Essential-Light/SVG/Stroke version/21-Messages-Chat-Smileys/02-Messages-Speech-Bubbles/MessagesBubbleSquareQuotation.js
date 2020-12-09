import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareQuotation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-quotation_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-quotation_svg__a"
      d="M23.5 17a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1V2.982a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-quotation_svg__a"
      d="M10.5 7.982v3a2.006 2.006 0 01-2 2"
    />,
    <circle
      className="messages-bubble-square-quotation_svg__a"
      cx={8.5}
      cy={7.982}
      r={2}
    />,
    <path
      className="messages-bubble-square-quotation_svg__a"
      d="M17.5 7.982v3a2.006 2.006 0 01-2 2"
    />,
    <circle
      className="messages-bubble-square-quotation_svg__a"
      cx={15.5}
      cy={7.982}
      r={2}
    />
  );

export default SvgMessagesBubbleSquareQuotation;
