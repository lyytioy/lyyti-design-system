import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="earpods-tap_svg__a"
      d="M4.5 5.5A5.213 5.213 0 00.791 7a1 1 0 00-.291.709v4.582A1 1 0 00.791 13 5.213 5.213 0 004.5 14.5a5.325 5.325 0 003-.92v8.92a1 1 0 002 0V10a4.77 4.77 0 00-5-4.5zM23.5 18.406l-1.59-1.838a10.012 10.012 0 00-3.362-2.532l-3.436-1.59A1.146 1.146 0 0116 10.363l1.26.506a1.492 1.492 0 001.588-2.462l-4.542-4.358a1 1 0 011.388-1.441l4.413 3.3a9.977 9.977 0 012.955 3.539l.438.877M13.5 7.716A4.5 4.5 0 0111 .5"
    />,
    <path
      className="earpods-tap_svg__a"
      d="M3 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgEarpodsTap;
