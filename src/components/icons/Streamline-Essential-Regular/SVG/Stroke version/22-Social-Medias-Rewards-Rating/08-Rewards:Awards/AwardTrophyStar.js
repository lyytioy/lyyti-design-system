import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophyStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-star_svg__a"
      d="M11.996 15.75v3M18.361 23.25a6.751 6.751 0 00-12.73 0zM16.5.75h3.75a1.5 1.5 0 011.5 1.5V6a9.75 9.75 0 01-19.5 0V2.25a1.5 1.5 0 011.5-1.5H7.5"
    />,
    <path
      className="award-trophy-star_svg__a"
      d="M12.53 2.573l1.249 2.458h2.127a.582.582 0 01.419 1l-1.953 1.918 1.082 2.485a.589.589 0 01-.839.737L12 9.7l-2.615 1.471a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.454a.594.594 0 011.06 0z"
    />
  );

export default SvgAwardTrophyStar;
