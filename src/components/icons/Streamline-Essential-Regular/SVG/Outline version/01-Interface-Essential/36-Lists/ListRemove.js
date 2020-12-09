import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.25 2.873a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM5.25 8.873a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM5.25 14.873a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z" />,
    <circle cx={1.125} cy={2.123} r={1.125} />,
    <circle cx={1.125} cy={8.123} r={1.125} />,
    <circle cx={1.125} cy={14.123} r={1.125} />,
    <path d="M17.25 23.873c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.401 24 17.123s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z" />,
    <path d="M14.25 17.873a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z" />
  );

export default SvgListRemove;
