import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingPeopleFirst = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-people-first_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ranking-people-first_svg__a"
      d="M8.25 17.25h-6a1.5 1.5 0 00-1.5 1.5v4.5h7.5zM21.75 17.25h-6v6h7.5v-4.5a1.5 1.5 0 00-1.5-1.5zM14.25 11.25h-4.5a1.5 1.5 0 00-1.5 1.5v10.5h7.5v-10.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="ranking-people-first_svg__a"
      cx={12}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="ranking-people-first_svg__a"
      d="M15.249 8.25a4.269 4.269 0 00-6.5 0"
    />,
    <circle
      className="ranking-people-first_svg__a"
      cx={20.001}
      cy={10.125}
      r={2.625}
    />,
    <path
      className="ranking-people-first_svg__a"
      d="M23.25 15a4.26 4.26 0 00-4.5-1.311"
    />,
    <circle
      className="ranking-people-first_svg__a"
      cx={3.999}
      cy={10.125}
      r={2.625}
    />,
    <path
      className="ranking-people-first_svg__a"
      d="M.75 15A4.286 4.286 0 014 13.5a4.237 4.237 0 011.245.188"
    />
  );

export default SvgRankingPeopleFirst;
