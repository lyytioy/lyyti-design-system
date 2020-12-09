import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cog-search_svg__a" cx={10.5} cy={10.501} r={10} />,
    <path
      className="cog-search_svg__a"
      d="M17.572 17.574l5.928 5.927M15.361 9.426l.652-.376a1 1 0 00.366-1.366l-.5-.866a1 1 0 00-1.366-.366l-.645.372A4.955 4.955 0 0012 5.731V5a1 1 0 00-1-1h-1a1 1 0 00-1 1v.738a5 5 0 00-1.861 1.09l-.653-.377a1 1 0 00-1.366.367l-.5.866a1 1 0 00.366 1.366l.656.379a4.937 4.937 0 000 2.147l-.652.376a1 1 0 00-.367 1.366l.5.866a1 1 0 001.366.366l.645-.372A4.957 4.957 0 009 15.27V16a1 1 0 001 1h1a1 1 0 001-1v-.737a4.989 4.989 0 001.862-1.09l.651.376a1 1 0 001.366-.366l.5-.866a1 1 0 00-.366-1.366l-.655-.378a4.926 4.926 0 00.003-2.147z"
    />,
    <circle className="cog-search_svg__a" cx={10.5} cy={10.501} r={2} />
  );

export default SvgCogSearch;
