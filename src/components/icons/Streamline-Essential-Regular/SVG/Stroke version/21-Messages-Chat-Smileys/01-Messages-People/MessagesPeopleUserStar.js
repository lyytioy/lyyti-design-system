import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-star_svg__a"
      d="M11.25 15.75h3v4.5l4.5-4.5h3a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5"
    />,
    <circle
      className="messages-people-user-star_svg__a"
      cx={4.5}
      cy={6.75}
      r={3}
    />,
    <path
      className="messages-people-user-star_svg__a"
      d="M8.25 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM16.28 4.073l1.249 2.458h2.127a.582.582 0 01.419 1l-1.953 1.918 1.078 2.485a.589.589 0 01-.839.737L15.75 11.2l-2.615 1.471a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.454a.594.594 0 011.06 0z"
    />
  );

export default SvgMessagesPeopleUserStar;
