import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingStarTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-star-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ranking-star-top_svg__a"
      x={8.5}
      y={11.5}
      width={7}
      height={12}
      rx={1}
      ry={1}
    />,
    <rect
      className="ranking-star-top_svg__a"
      x={0.5}
      y={17.5}
      width={6}
      height={6}
      rx={1}
      ry={1}
    />,
    <rect
      className="ranking-star-top_svg__a"
      x={17.5}
      y={20.5}
      width={6}
      height={3}
      rx={1}
      ry={1}
    />,
    <path
      className="ranking-star-top_svg__a"
      d="M13.5 3.5h1.921a.5.5 0 01.293.905l-1.6 1.161.986 2.266a.5.5 0 01-.7.635L12 7.122 9.609 8.467a.5.5 0 01-.7-.635l.986-2.266-1.6-1.161a.5.5 0 01.286-.905H10.5L11.534.82a.5.5 0 01.933 0z"
    />,
    <circle className="ranking-star-top_svg__a" cx={3.5} cy={13.5} r={2} />,
    <circle className="ranking-star-top_svg__a" cx={20.5} cy={16.5} r={2} />
  );

export default SvgRankingStarTop;
