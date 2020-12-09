import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarFavorite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-favorite-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-favorite-1_svg__a"
      d="M18.206 11.931l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.315 1.44 3.314a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.966a.785.785 0 01-1.117-.982l1.44-3.314-2.6-2.315a.734.734 0 01.514-1.283h3l1.541-3.57a.794.794 0 011.408-.005z"
    />,
    <path
      className="calendar-favorite-1_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarFavorite1;
