import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-news_svg__cls-1"
      x={3}
      y={5}
      width={5}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <path
      d="M20.556 16.5a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="single-man-news_svg__cls-1"
      d="M12.7 6.6a5.4 5.4 0 006.022 1.21"
    />,
    <circle
      className="single-man-news_svg__cls-1"
      cx={15.5}
      cy={8.25}
      r={3.25}
    />,
    <rect
      className="single-man-news_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path className="single-man-news_svg__cls-1" d="M12 18v4M4.5 22h15" />
  );

export default SvgSingleManNews;
