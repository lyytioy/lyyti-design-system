import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M19.089 13.858l1.282 2.769h2.5A.613.613 0 0123.3 17.7l-2.166 2.135 1.2 2.761a.654.654 0 01-.931.819l-2.9-1.634-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L13.7 17.7a.613.613 0 01.429-1.07h2.495l1.285-2.769a.662.662 0 011.18-.003zM.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-star_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-star_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M19.47 10.605A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsStar;
