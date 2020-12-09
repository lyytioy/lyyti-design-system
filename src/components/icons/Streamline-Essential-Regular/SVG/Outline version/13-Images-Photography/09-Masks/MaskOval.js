import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskOval = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z" />,
    <path d="M12 20.25c-3.308 0-6-3.701-6-8.25s2.692-8.25 6-8.25 6 3.701 6 8.25-2.692 8.25-6 8.25zm0-15c-2.481 0-4.5 3.028-4.5 6.75s2.019 6.75 4.5 6.75 4.5-3.028 4.5-6.75-2.019-6.75-4.5-6.75z" />
  );

export default SvgMaskOval;
