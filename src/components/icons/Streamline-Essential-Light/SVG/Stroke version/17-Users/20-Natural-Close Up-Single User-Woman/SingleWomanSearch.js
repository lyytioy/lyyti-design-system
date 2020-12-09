import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-woman-search_svg__cls-1"
      d="M12.322 13.19a6.34 6.34 0 003.746-.783.5.5 0 00.142-.751c-.433-.508-.733-1.178-.866-3.133-.251-3.716-2.757-5.023-4.911-5.023S5.774 4.807 5.522 8.523c-.132 1.955-.432 2.625-.865 3.133a.5.5 0 00.142.751 6.343 6.343 0 003.745.783"
    />,
    <path
      className="single-woman-search_svg__cls-1"
      d="M15.776 15.716c-.853-.352-1.862-.713-2.959-1.119a.759.759 0 01-.5-.709v-1.38a.754.754 0 01.247-.559 2.717 2.717 0 00.887-2.027v-1.1a.989.989 0 00-.7-.946 4.9 4.9 0 01-1.986-1.181.494.494 0 00-.679 0 4.9 4.9 0 01-1.978 1.178.988.988 0 00-.7.946v1.1a2.722 2.722 0 00.892 2.03.754.754 0 01.247.559v1.38a.759.759 0 01-.5.709c-1.1.406-2.1.767-2.958 1.119M23.5 23.5l-5.929-5.929"
    />
  );

export default SvgSingleWomanSearch;
