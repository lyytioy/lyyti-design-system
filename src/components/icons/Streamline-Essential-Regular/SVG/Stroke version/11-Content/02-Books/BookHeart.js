import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-heart_svg__a"
      d="M12 23.25H3.75A2.25 2.25 0 011.5 21M19.5 9.75V1.5a.75.75 0 00-.75-.75H4.5a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25h4.5"
    />,
    <path
      className="book-heart_svg__a"
      d="M16.5 23.25l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.025 3.025 0 014.845.786 3.025 3.025 0 01-.566 3.492z"
    />
  );

export default SvgBookHeart;
