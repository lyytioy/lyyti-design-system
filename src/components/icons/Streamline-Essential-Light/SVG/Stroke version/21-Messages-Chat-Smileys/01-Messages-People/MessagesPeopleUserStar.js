import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-star_svg__a"
      d="M8.5 11.5a1 1 0 001 1h2V16l3.5-3.5h7.5a1 1 0 001-1v-10a1 1 0 00-1-1h-13a1 1 0 00-1 1z"
    />,
    <circle
      className="messages-people-user-star_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-star_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3zM16.465 2.787L17.492 5h2a.49.49 0 01.346.855L18.1 7.566l.962 2.208a.524.524 0 01-.746.655l-2.323-1.307-2.324 1.307a.524.524 0 01-.746-.655l.961-2.208-1.735-1.709A.489.489 0 0112.492 5h2l1.03-2.215a.531.531 0 01.943.002z"
    />
  );

export default SvgMessagesPeopleUserStar;
