import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophyStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-star-1_svg__a"
      d="M12.53 4.3l1.249 2.458h2.127a.582.582 0 01.419 1l-1.953 1.917 1.082 2.485a.589.589 0 01-.839.737L12 11.426 9.385 12.9a.589.589 0 01-.839-.737l1.082-2.488-1.953-1.922a.582.582 0 01.419-1h2.127L11.47 4.3a.594.594 0 011.06 0zM19.5 4.5c3.365 0 2.756-.452 3.75 7.5M4.5 4.5C.71 4.5 1.843 3.26.75 12M17.616 23.25H6.384"
    />,
    <path
      className="award-trophy-star-1_svg__a"
      d="M4.5 10.5V2.25A1.5 1.5 0 016 .75h12a1.5 1.5 0 011.5 1.5v8.25c0 9.008-15 9.02-15 0zM12 23.25v-6"
    />
  );

export default SvgAwardTrophyStar1;
