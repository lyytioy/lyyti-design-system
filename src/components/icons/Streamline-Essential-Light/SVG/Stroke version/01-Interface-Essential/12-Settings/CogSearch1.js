import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-search-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cog-search-1_svg__a" cx={10.5} cy={10.501} r={10} />,
    <circle className="cog-search-1_svg__a" cx={10.5} cy={10.501} r={2} />,
    <path
      className="cog-search-1_svg__a"
      d="M23.5 23.501l-5.929-5.929M9.711 5.314a1.062 1.062 0 001.578 0l.51-.564a1.063 1.063 0 011.85.766l-.039.76a1.063 1.063 0 001.115 1.115l.76-.039a1.063 1.063 0 01.766 1.85l-.564.51a1.062 1.062 0 000 1.578l.564.51a1.063 1.063 0 01-.766 1.85l-.76-.039a1.063 1.063 0 00-1.115 1.115l.039.76a1.063 1.063 0 01-1.85.766l-.51-.564a1.062 1.062 0 00-1.578 0l-.51.564a1.063 1.063 0 01-1.85-.766l.039-.76a1.063 1.063 0 00-1.115-1.115l-.76.039a1.063 1.063 0 01-.766-1.85l.564-.51a1.062 1.062 0 000-1.578L4.749 9.2a1.063 1.063 0 01.766-1.85l.76.039A1.063 1.063 0 007.39 6.276l-.039-.76A1.063 1.063 0 019.2 4.75z"
    />
  );

export default SvgCogSearch1;
