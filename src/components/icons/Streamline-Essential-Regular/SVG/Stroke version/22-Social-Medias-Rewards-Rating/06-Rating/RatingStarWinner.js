import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarWinner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-winner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-winner_svg__a"
      d="M18.825 12.374l1.251 2.252h2.481a.68.68 0 01.489 1.163l-2.278 2.486 1.262 2.9a.688.688 0 01-.979.86L18 20.318l-3.05 1.716a.688.688 0 01-.98-.86l1.22-2.8M5.175 12.374l-1.251 2.252H1.443a.68.68 0 00-.489 1.163l2.278 2.486-1.262 2.9a.688.688 0 00.979.86L6 20.318l3.05 1.716a.688.688 0 00.98-.86l-1.22-2.8M12.368 2.141l1.989 3.977 3.827.383a.485.485 0 01.294.825l-3.152 3.152 1.168 4.283a.484.484 0 01-.684.56l-3.875-1.937-3.875 1.937a.484.484 0 01-.683-.56l1.168-4.283-3.152-3.152a.485.485 0 01.294-.826l3.826-.383L11.5 2.141a.484.484 0 01.868 0z"
    />
  );

export default SvgRatingStarWinner;
