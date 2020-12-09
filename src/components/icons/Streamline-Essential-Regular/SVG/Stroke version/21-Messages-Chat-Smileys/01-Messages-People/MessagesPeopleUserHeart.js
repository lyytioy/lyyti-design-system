import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-heart_svg__a"
      d="M11.25 15.75h3v4.5l4.5-4.5h3a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5"
    />,
    <circle
      className="messages-people-user-heart_svg__a"
      cx={4.5}
      cy={6.75}
      r={3}
    />,
    <path
      className="messages-people-user-heart_svg__a"
      d="M8.25 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM15.75 12.75l-3.835-4a2.27 2.27 0 01-.426-2.619 2.27 2.27 0 013.635-.59l.626.626.626-.626a2.269 2.269 0 013.634.59 2.268 2.268 0 01-.425 2.619z"
    />
  );

export default SvgMessagesPeopleUserHeart;
