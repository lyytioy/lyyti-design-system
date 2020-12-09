import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-upload_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.316-1.413 2.5-3.667 3.324M23.25 10.479V5.251"
    />,
    <path
      className="database-upload_svg__a"
      d="M.75 5.251v6c0 1.96 3.134 3.627 7.506 4.244"
    />,
    <path
      className="database-upload_svg__a"
      d="M.75 11.251v6c0 2.174 3.856 3.988 8.982 4.408"
    />,
    <circle className="database-upload_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path
      className="database-upload_svg__a"
      d="M17.25 20.251v-6M17.25 14.251L15 16.501M17.25 14.251l2.25 2.25"
    />
  );

export default SvgDatabaseUpload;
