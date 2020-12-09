import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoading = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="loading_svg__a"
      d="M11 2a1 1 0 112 0v3a1 1 0 11-2 0zM4.382 5.753A1 1 0 015.8 4.338l2.118 2.121a1 1 0 11-1.413 1.415zM1 12a1 1 0 011-1h3a1 1 0 010 2H2a1 1 0 01-1-1zM4.129 19.852a1 1 0 010-1.415l2.12-2.122a1 1 0 111.415 1.414l-2.121 2.122a1 1 0 01-1.414.001zM11 19a1 1 0 012 0v3a1 1 0 01-2 0zM16.4 17.774a1 1 0 011.416-1.416l2.122 2.12a1 1 0 01-1.411 1.422zM18 12a1 1 0 011-1h3a1 1 0 010 2h-3a1 1 0 01-1-1zM16.218 7.738a1 1 0 010-1.416L18.337 4.2a1 1 0 011.416 1.416l-2.121 2.122a1 1 0 01-1.414 0z"
    />
  );

export default SvgLoading;
