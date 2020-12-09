import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="notes-search_svg__a" cx={15.764} cy={15.75} r={5.25} />,
    <path
      className="notes-search_svg__a"
      d="M23.25 23.25l-3.774-3.788M8.25 20.236h-6a1.464 1.464 0 01-1.5-1.5V3.843a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607v4.393M5.25.75v4.486M9.75.75v4.486M14.25.75v4.486"
    />
  );

export default SvgNotesSearch;
