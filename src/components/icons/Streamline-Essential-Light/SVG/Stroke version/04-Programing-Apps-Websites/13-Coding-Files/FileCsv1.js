import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCsv1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-csv-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-csv-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h3"
    />,
    <path
      className="file-csv-1_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M11.5 23.5a4 4 0 110-8M17.5 15.516h-2.146a1.854 1.854 0 00-.829 3.513l1.95.975a1.854 1.854 0 01-.829 3.512H13.5M23.5 15.5v2.3a9.126 9.126 0 01-2 5.7 9.126 9.126 0 01-2-5.7v-2.3"
    />
  );

export default SvgFileCsv1;
