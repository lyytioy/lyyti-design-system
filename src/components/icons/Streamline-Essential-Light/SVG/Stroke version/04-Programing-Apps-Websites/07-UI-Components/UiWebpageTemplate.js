import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageTemplate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-template_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-template_svg__a"
      d="M1.5 1h21a1 1 0 011 1v3.5a.5.5 0 01-.5.5H1a.5.5 0 01-.5-.5V2a1 1 0 011-1zM17.5 1v5"
    />,
    <path
      className="ui-webpage-template_svg__a"
      d="M19.5 3l1 1 1-1M1 8h22a.5.5 0 01.5.5V22a1 1 0 01-1 1h-21a1 1 0 01-1-1V8.5A.5.5 0 011 8zM.5 13h23M.5 18h23"
    />,
    <path
      className="ui-webpage-template_svg__a"
      d="M20.5 10.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 15.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 20.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgUiWebpageTemplate;
