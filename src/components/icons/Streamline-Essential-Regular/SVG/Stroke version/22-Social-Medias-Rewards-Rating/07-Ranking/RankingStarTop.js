import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingStarTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-star-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ranking-star-top_svg__a"
      x={1.125}
      y={15.75}
      width={5.25}
      height={7.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="ranking-star-top_svg__a"
      x={17.625}
      y={18.75}
      width={5.25}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="ranking-star-top_svg__a"
      x={9.375}
      y={12.75}
      width={5.25}
      height={10.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="ranking-star-top_svg__a"
      d="M12.905 1.076l1.249 2.455h2.127a.582.582 0 01.419 1l-1.953 1.918 1.082 2.485a.589.589 0 01-.839.737L12.375 8.2 9.76 9.671a.589.589 0 01-.839-.737L10 6.449 8.05 4.527a.582.582 0 01.419-1H10.6l1.249-2.455a.594.594 0 011.056.004z"
    />
  );

export default SvgRankingStarTop;
