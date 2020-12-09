import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-edit_svg__a"
      cx={12}
      cy={5.251}
      rx={11.25}
      ry={4.5}
    />,
    <path
      className="database-edit_svg__a"
      d="M23.25 9.008V5.251M.75 5.251v6c0 2.373 4.592 4.316 10.415 4.487"
    />,
    <path
      className="database-edit_svg__a"
      d="M.75 11.251v6c0 2.082 3.536 3.834 8.337 4.347M22.629 14.87L15 22.5l-3.75.75.75-3.75 7.63-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 01-.001 2.992z"
    />
  );

export default SvgDatabaseEdit;
