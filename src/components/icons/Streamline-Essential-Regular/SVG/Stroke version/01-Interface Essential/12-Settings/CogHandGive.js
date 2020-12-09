import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogHandGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-hand-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cog-hand-give_svg__a"
      d="M.855 14.251v9M.855 21.751h15a3 3 0 00-3-3h-3.75a3 3 0 00-3-3H.855M6.105 18.751h3"
    />,
    <circle className="cog-hand-give_svg__a" cx={15.104} cy={9.751} r={2.25} />,
    <path
      className="cog-hand-give_svg__a"
      d="M16.925 16.5l.159-1.113A5.946 5.946 0 0019 14.284l1.946.781a1.5 1.5 0 001.858-.642l.2-.345a1.5 1.5 0 00-.373-1.93l-1.633-1.282a5.611 5.611 0 000-2.231l1.633-1.282A1.5 1.5 0 0023 5.423l-.2-.345a1.5 1.5 0 00-1.858-.642L19 5.217a5.946 5.946 0 00-1.911-1.1l-.3-2.074A1.5 1.5 0 0015.3.751h-.4a1.5 1.5 0 00-1.48 1.287l-.3 2.074a5.941 5.941 0 00-1.91 1.1l-1.943-.776a1.5 1.5 0 00-1.857.642l-.2.345a1.5 1.5 0 00.372 1.93l1.635 1.282a5.562 5.562 0 000 2.231l-1.634 1.282"
    />
  );

export default SvgCogHandGive;
