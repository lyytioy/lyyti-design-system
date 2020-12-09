import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesAudience = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-audience_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="movies-audience_svg__a" cx={12} cy={18} r={2.25} />,
    <circle className="movies-audience_svg__a" cx={4.5} cy={18} r={2.25} />,
    <circle className="movies-audience_svg__a" cx={19.5} cy={18} r={2.25} />,
    <path
      className="movies-audience_svg__a"
      d="M22.761 23.25a4.581 4.581 0 00-7.133 0A4.76 4.76 0 0012 21.547M1.239 23.25a4.581 4.581 0 017.133 0A4.76 4.76 0 0112 21.547"
    />,
    <circle className="movies-audience_svg__a" cx={15.75} cy={9} r={2.25} />,
    <circle className="movies-audience_svg__a" cx={8.25} cy={9} r={2.25} />,
    <path
      className="movies-audience_svg__a"
      d="M18.1 13.094a4.672 4.672 0 00-2.68-.84M15.424 12.254a4.607 4.607 0 00-2.488.724M10.659 12.978a4.6 4.6 0 00-4.9 0"
    />,
    <path
      className="movies-audience_svg__a"
      d="M2.218 14.25h-.49a.971.971 0 01-.978-.964V1.714A.971.971 0 011.728.75h20.544a.971.971 0 01.978.964v11.572a.971.971 0 01-.978.964h-.489"
    />
  );

export default SvgMoviesAudience;
