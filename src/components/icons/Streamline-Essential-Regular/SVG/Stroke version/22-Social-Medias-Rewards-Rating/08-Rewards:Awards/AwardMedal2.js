import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-medal-2_svg__a"
      d="M12.7 12.434l1.665 3.319h2.85a.775.775 0 01.544 1.328l-2.433 1.669 1.266 3.393a.788.788 0 01-1.11 1L12 21.184l-3.491 1.961a.789.789 0 01-1.11-1L9 18.75l-2.76-1.659a.781.781 0 01.548-1.338h2.835l1.665-3.319a.793.793 0 011.412 0zM9.75.75v6M14.25.75v6M17.25 11.25l1.5-10.5H5.25l1.5 10.5"
    />
  );

export default SvgAwardMedal2;
