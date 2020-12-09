import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecordPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vinyl-record-player_svg__a"
      d="M21.5 4h1a1 1 0 011 1v17a1 1 0 01-1 1h-21a1 1 0 01-1-1V5a1 1 0 011-1h16M12.5 20.574a7.5 7.5 0 114.6-9.515"
    />,
    <circle className="vinyl-record-player_svg__a" cx={10} cy={13.5} r={2.5} />,
    <path
      className="vinyl-record-player_svg__a"
      d="M19.5 6v6.5l-2.766 3.313M19.5 1a2 2 0 00-2 2v2a1 1 0 001 1h2a1 1 0 001-1V3a2 2 0 00-2-2zM15 15.51a1 1 0 011.414 0l.592.592a1 1 0 010 1.414l-.66.66a1.446 1.446 0 01-2.244.3 1.507 1.507 0 01.187-2.252zM10 13.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgVinylRecordPlayer;
