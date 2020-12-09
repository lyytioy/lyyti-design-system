import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-heart_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />,
    <path
      className="book-heart_svg__a"
      d="M12.5 19.5l-5.117-5.335a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.835.836.834-.835a3.025 3.025 0 014.845.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgBookHeart;
