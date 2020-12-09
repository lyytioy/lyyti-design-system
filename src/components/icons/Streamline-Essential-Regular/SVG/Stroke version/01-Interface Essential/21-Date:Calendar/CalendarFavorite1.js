import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarFavorite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-favorite-1_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-favorite-1_svg__a"
      d="M17.955 11.681L19.494 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.44 3.313a.784.784 0 01-1.117.982l-3.481-1.961-3.482 1.961a.784.784 0 01-1.117-.982l1.44-3.313-2.6-2.563a.734.734 0 01.51-1.283H15l1.542-3.322a.8.8 0 011.413.003zM7.479 17.25H2.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path
      className="calendar-favorite-1_svg__a"
      d="M5.243 3.75v-3M12.743 3.75v-3"
    />
  );

export default SvgCalendarFavorite1;
