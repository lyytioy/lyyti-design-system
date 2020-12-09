import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 8a3 3 0 00-3-3H3a3 3 0 00-3 3v8a3 3 0 003 3h18a3 3 0 003-3zm-2 8a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h18a1 1 0 011 1z" />,
    <path d="M13.676 15.249a.873.873 0 001.219 0l1.785-1.785a.346.346 0 01.488 0l1.785 1.785a.875.875 0 001.218 0 .861.861 0 000-1.219l-1.785-1.785a.345.345 0 010-.487l1.785-1.785a.862.862 0 00-1.218-1.219l-1.785 1.785a.345.345 0 01-.488 0L14.9 8.754a.862.862 0 10-1.219 1.219l1.785 1.785a.343.343 0 010 .487l-1.79 1.785a.863.863 0 000 1.219z" />
  );

export default SvgRemoveButton;
