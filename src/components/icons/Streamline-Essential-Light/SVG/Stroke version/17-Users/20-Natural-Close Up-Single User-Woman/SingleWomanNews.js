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
      x={4}
      y={5}
      width={5}
      height={5}
      rx={0.5}
      ry={0.5}
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
    <path
      className="single-woman-news_svg__cls-1"
      d="M12 18v4M4.5 22h15M8.835 12.563a6.177 6.177 0 004.276 1.127M16.889 13.69a6.335 6.335 0 003.745-.783.5.5 0 00.143-.751c-.433-.508-.734-1.178-.866-3.133C19.659 5.307 17.153 4 15 4a4.682 4.682 0 00-4.1 2.218"
    />,
    <path
      className="single-woman-news_svg__cls-1"
      d="M20.343 16.216c-.853-.352-1.862-.713-2.959-1.119a.759.759 0 01-.5-.709v-1.38a.754.754 0 01.247-.559 2.72 2.72 0 00.886-2.027v-1.1a.988.988 0 00-.7-.946 4.89 4.89 0 01-1.977-1.184.5.5 0 00-.68 0 4.89 4.89 0 01-1.986 1.181.988.988 0 00-.7.946v1.1a2.719 2.719 0 00.886 2.027.754.754 0 01.247.559v1.38a.759.759 0 01-.5.709c-1.1.406-2.106.767-2.959 1.119"
    />
  );

export default SvgSingleWomanNews;
