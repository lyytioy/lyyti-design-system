import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSqueezeSides = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".squeeze-sides_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="squeeze-sides_svg__a"
      d="M23.5 14.5a3 3 0 01-3-3v-2a1.5 1.5 0 00-3 0"
    />,
    <path
      className="squeeze-sides_svg__a"
      d="M6.5 6.5V3A1.505 1.505 0 018 1.5h8A1.5 1.5 0 0117.5 3v17.5a2 2 0 01-2.012 2l-.988-.006H8.494A1.994 1.994 0 016.5 20.5"
    />,
    <path
      className="squeeze-sides_svg__a"
      d="M12 20.262a.25.25 0 10.25.25.25.25 0 00-.25-.25M9.5 18.512h8M9.5 19A1.5 1.5 0 018 20.5H6a1.5 1.5 0 010-3h2A1.5 1.5 0 019.5 19zM9.5 16A1.5 1.5 0 018 17.5H5a1.5 1.5 0 010-3h3A1.5 1.5 0 019.5 16zM9.5 13A1.5 1.5 0 018 14.5H5a1.5 1.5 0 010-3h3A1.5 1.5 0 019.5 13zM9.5 10A1.5 1.5 0 018 11.5H6a1.5 1.5 0 010-3h2A1.5 1.5 0 019.5 10zM17.5 21.5l6 1M.5 3.5h4M2.5 1.5l2 2-2 2M23.5 3.5h-4M21.5 1.5l-2 2 2 2"
    />
  );

export default SvgSqueezeSides;
