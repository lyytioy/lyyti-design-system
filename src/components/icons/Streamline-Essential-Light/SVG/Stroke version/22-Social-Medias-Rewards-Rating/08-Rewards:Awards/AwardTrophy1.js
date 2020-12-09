import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-1_svg__a"
      d="M17.715 23.112a4.457 4.457 0 00-3.184-1.612h-5a4.587 4.587 0 00-3.216 1.588L6 23.5h12zM15.775 9.458a.5.5 0 00-.67-.579 8.3 8.3 0 01-6.213-.008.5.5 0 00-.667.579L11 21.478h2z"
    />,
    <circle className="award-trophy-1_svg__a" cx={12} cy={3.5} r={3} />,
    <path
      className="award-trophy-1_svg__a"
      d="M16.734 12.011l.924.433a1.672 1.672 0 01.7 2.512L14 21.48M7.266 12.011l-.924.433a1.672 1.672 0 00-.7 2.512L10 21.48"
    />
  );

export default SvgAwardTrophy1;
