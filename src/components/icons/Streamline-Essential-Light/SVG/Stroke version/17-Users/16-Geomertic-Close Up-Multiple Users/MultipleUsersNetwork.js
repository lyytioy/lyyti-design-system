import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleUsersNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-users-network_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-users-network_svg__cls-1"
      d="M18.5 6.976a6.521 6.521 0 01-6.518 6.524A6.592 6.592 0 015.5 6.858 6.356 6.356 0 0111.721.506C11.815.5 11.908.5 12 .5a6.462 6.462 0 016.5 6.476zM11.721.506c-3.392 3.674-3.392 8.467 0 12.989M12.285.506c3.392 3.674 3.392 8.466 0 12.987M6.574 10.5h10.894M6.453 3.5h11.043M5.5 7h13"
    />,
    <g id="multiple-users-network_svg___Group_" data-name="&lt;Group&gt;">
      <circle
        className="multiple-users-network_svg__cls-1"
        cx={12.086}
        cy={18.35}
        r={2.35}
      />
      <circle
        className="multiple-users-network_svg__cls-1"
        cx={4.694}
        cy={18.35}
        r={2.35}
      />
      <circle
        className="multiple-users-network_svg__cls-1"
        cx={19.314}
        cy={18.35}
        r={2.35}
      />
      <path
        className="multiple-users-network_svg__cls-1"
        d="M23 23.5a4.683 4.683 0 00-7.292 0A4.861 4.861 0 0012 21.76M1 23.5a4.683 4.683 0 017.292 0A4.861 4.861 0 0112 21.76"
      />
    </g>
  );

export default SvgMultipleUsersNetwork;
