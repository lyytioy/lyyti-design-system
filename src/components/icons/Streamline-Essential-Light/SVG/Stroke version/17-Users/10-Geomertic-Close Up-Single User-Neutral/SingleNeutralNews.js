import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-news_svg__cls-1"
      x={3}
      y={5}
      width={5}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <g id="single-neutral-news_svg__New_Symbol_1" data-name="New Symbol 1">
      <circle
        className="single-neutral-news_svg__cls-1"
        cx={15.5}
        cy={7.25}
        r={3.25}
      />
      <path
        d="M20.556 15.5a5.321 5.321 0 00-10 0"
        strokeWidth={0.989}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>,
    <rect
      className="single-neutral-news_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path className="single-neutral-news_svg__cls-1" d="M12 18v4M4.5 22h15" />
  );

export default SvgSingleNeutralNews;
