import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.75 23.997c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75 9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75zm0-18c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25S18 18.796 18 14.247s-3.701-8.25-8.25-8.25zM23.25 8.997a.743.743 0 01-.53-.22l-7.5-7.5a.75.75 0 01.53-1.281h7.5a.75.75 0 01.75.75v7.5a.747.747 0 01-.75.751zm-.75-2.56v-4.94h-4.939l4.939 4.94z" />,
    <path d="M8.25 19.497a.75.75 0 010-1.5H9v-4.5h-.75a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75v5.25h.75a.75.75 0 010 1.5h-3z" />,
    <circle cx={9.75} cy={9.375} r={1.125} />
  );

export default SvgCursorInformation;
