import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarThree = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-three_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-three_svg__a"
      d="M11.759 1.292a.251.251 0 01.486 0l.755 3.1h3.174a.25.25 0 01.138.458L14 6.322l1.212 3.232a.25.25 0 01-.38.291L12 7.822 9.167 9.845a.25.25 0 01-.38-.291L10 6.322 7.686 4.85a.25.25 0 01.138-.458H11zM18.259 14.4a.251.251 0 01.486 0l.757 2.988h3.174a.25.25 0 01.138.458L20.5 19.322l1.212 3.232a.25.25 0 01-.38.291L18.5 20.822l-2.833 2.023a.25.25 0 01-.38-.291l1.213-3.232-2.314-1.472a.25.25 0 01.138-.458H17.5zM5.259 14.292a.251.251 0 01.486 0l.757 3.1h3.174a.25.25 0 01.138.458L7.5 19.322l1.212 3.232a.25.25 0 01-.38.291L5.5 20.822l-2.833 2.023a.25.25 0 01-.38-.291L3.5 19.322 1.186 17.85a.25.25 0 01.138-.458H4.5z"
    />
  );

export default SvgRatingStarThree;
