import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManIdCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-id-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M9.143 11.1a5.4 5.4 0 006.021 1.21"
    />,
    <circle
      className="single-man-id-card_svg__cls-1"
      cx={11.944}
      cy={12.75}
      r={3.25}
    />,
    <path
      d="M17 21a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M12 2.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.5 4.5h5a1 1 0 011 1v17a1 1 0 01-1 1h-15a1 1 0 01-1-1v-17a1 1 0 011-1h5"
    />,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M14.5 6a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V3a2.5 2.5 0 015 0z"
    />
  );

export default SvgSingleManIdCard;
