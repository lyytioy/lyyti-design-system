import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophyStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-star_svg__a"
      d="M20.887 13.753A4 4 0 0023.5 10V7.5a1 1 0 00-1-1h-2.048M3.113 13.753A4 4 0 01.5 10V7.5a1 1 0 011-1h2.051"
    />,
    <path
      className="award-trophy-star_svg__a"
      d="M20.994 1.525a1 1 0 00-1-1.025H4.018a1 1 0 00-1 1.025C3.365 15.739 10.971 11.678 10.971 17c-.055 3.1-1.349 4.239-3.564 4.459a1 1 0 00-.9 1v.041a1 1 0 001 1h9a1 1 0 001-1v-.046a1 1 0 00-.9-1C14.364 21.24 12.971 20.1 12.971 17c0-5.328 7.672-1.323 8.023-15.475z"
    />,
    <path
      className="award-trophy-star_svg__a"
      d="M11.764 2.689a.251.251 0 01.486 0l.757 2.811h3.174a.25.25 0 01.138.458L14.006 7.64l1.212 3.232a.25.25 0 01-.38.291L12.005 9.14l-2.833 2.023a.25.25 0 01-.38-.291L10 7.64 7.691 5.958a.25.25 0 01.138-.458H11z"
    />
  );

export default SvgAwardTrophyStar;
