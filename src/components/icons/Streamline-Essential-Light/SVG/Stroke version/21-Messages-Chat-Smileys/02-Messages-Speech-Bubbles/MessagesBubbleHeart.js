import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-heart_svg__a"
      d="M12 1C5.649 1 .5 5.253.5 10.5a8.738 8.738 0 003.4 6.741L1.5 23l6.372-3.641A13.608 13.608 0 0012 20c6.351 0 11.5-4.253 11.5-9.5S18.351 1 12 1z"
    />,
    <path
      className="messages-bubble-heart_svg__a"
      d="M12 15l-4.139-4.318A2.447 2.447 0 017.4 7.855a2.449 2.449 0 013.922-.637l.678.676.676-.676a2.449 2.449 0 013.922.637 2.449 2.449 0 01-.458 2.827z"
    />
  );

export default SvgMessagesBubbleHeart;
