import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-heart_svg__a"
      d="M9.5 20.611h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v6.5M4.5 4.611v-4M8.5 4.611v-4M12.5 4.611v-4"
    />,
    <path
      className="notes-heart_svg__a"
      d="M17.861 23.235a.5.5 0 01-.722 0l-4.753-4.958a3.027 3.027 0 01-.567-3.493A3.026 3.026 0 0116.665 14l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgNotesHeart;
