import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="retouch-graph_svg__a"
      d="M12.146 14.215a16.139 16.139 0 001.873-3.764 19.6 19.6 0 012.134-4.419"
    />,
    <path className="retouch-graph_svg__a" d="M3 .75V21h20.25" />,
    <circle className="retouch-graph_svg__a" cx={10.5} cy={15.75} r={2.25} />,
    <circle className="retouch-graph_svg__a" cx={17.674} cy={4.374} r={2.25} />,
    <path
      className="retouch-graph_svg__a"
      d="M19.054 2.6A6.019 6.019 0 0123.25.754M3 21a16.478 16.478 0 006.087-3.5M.75 3L3 .75 5.25 3M21 18.75L23.25 21 21 23.25"
    />
  );

export default SvgRetouchGraph;
