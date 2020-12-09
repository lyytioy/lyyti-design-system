import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-news_svg__cls-1"
      x={1.5}
      y={2.25}
      width={21}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-man-news_svg__cls-1"
      d="M12 18.75v3M4.5 21.75h15M4.5 5.25H9v4.5H4.5z"
    />,
    <circle
      className="single-man-news_svg__cls-1"
      cx={15.25}
      cy={8.625}
      r={3.375}
    />,
    <path
      className="single-man-news_svg__cls-1"
      d="M20 15.749a6.026 6.026 0 00-9.5 0M18.625 8.736A6.752 6.752 0 0116.75 9a6.723 6.723 0 01-4.568-1.781"
    />
  );

export default SvgSingleManNews;
