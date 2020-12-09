import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-heart_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.475-3.084A10.5 10.5 0 1012.75.75z"
    />,
    <path
      className="messages-bubble-heart_svg__a"
      d="M12.75 16.313l-4.475-4.668a2.648 2.648 0 01-.5-3.056 2.647 2.647 0 014.24-.688l.731.73.731-.73a2.647 2.647 0 014.239.688 2.647 2.647 0 01-.5 3.056z"
    />
  );

export default SvgMessagesBubbleHeart;
