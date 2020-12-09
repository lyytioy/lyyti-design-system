import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanNews = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-news_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-news_svg__cls-1"
      x={3}
      y={5}
      width={5}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <g id="single-woman-news_svg__New_Symbol_4" data-name="New Symbol 4">
      <path
        className="single-woman-news_svg__cls-1"
        d="M19.87 11.373a4.724 4.724 0 01-.687-2.617V7.685a3.683 3.683 0 10-7.366 0v1.071a4.724 4.724 0 01-.687 2.617"
      />
      <path
        className="single-woman-news_svg__cls-1"
        d="M11.817 8.293A4.877 4.877 0 0015.5 6.605a4.877 4.877 0 003.683 1.688M18.746 8.273a3.25 3.25 0 01-6.492 0"
      />
    </g>,
    <path
      className="single-woman-news_svg__cls-1"
      d="M20.383 16a5.472 5.472 0 00-9.764 0"
    />,
    <rect
      className="single-woman-news_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path className="single-woman-news_svg__cls-1" d="M12 18v4M4.5 22h15" />
  );

export default SvgSingleWomanNews;
