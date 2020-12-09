import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-star_svg__a"
      d="M.75 23.25V.75M.75 20.293l3.154-.97a9.61 9.61 0 017.864 1 9.615 9.615 0 007.679 1.056l2.987-.853a1.126 1.126 0 00.816-1.082V3.637a1.126 1.126 0 00-1.434-1.082l-2.369.677a9.615 9.615 0 01-7.679-1.056 9.61 9.61 0 00-7.864-1L.75 2.145"
    />,
    <path
      className="flag-star_svg__a"
      d="M12.53 7.071l1.249 2.673h2.127a.582.582 0 01.419 1l-1.953 1.707 1.082 2.485a.589.589 0 01-.839.737L12 14.2l-2.615 1.469a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.707a.582.582 0 01.419-1h2.127l1.248-2.673a.6.6 0 011.061.004z"
    />
  );

export default SvgFlagStar;
