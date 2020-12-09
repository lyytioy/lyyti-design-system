import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodLockHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={11.345} cy={12.001} r={0.75} />,
    <path d="M11.345 5.508a2.141 2.141 0 00-2.139 2.138v.862h4.277v-.862a2.14 2.14 0 00-2.138-2.138z" />,
    <path d="M23.107 13.687c-.172-.534-.34-1.071-.508-1.608C20.936 6.762 19.216 1.263 13.3.182A10.773 10.773 0 004.866 2.2 9.963 9.963 0 00.889 9.282a10.187 10.187 0 003.956 9.071v5.139a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h.5a3.5 3.5 0 003.5-3.5v-2.5h2.312a1 1 0 00.95-1.305zm-7.262.321a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011-1.408V7.5a3.5 3.5 0 117 0v1.1a1.5 1.5 0 011 1.408z" />
  );

export default SvgMoodLockHead;
