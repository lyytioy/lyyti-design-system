import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zM6.036 17.078l1.116-2.792a.523.523 0 01.111-.168l5.892-5.892a.514.514 0 01.707 0L15.538 9.9a.505.505 0 01.146.354.5.5 0 01-.146.353L9.645 16.5a.483.483 0 01-.168.111l-2.791 1.117a.516.516 0 01-.54-.111.5.5 0 01-.11-.539zm11.734-8.7l-.838.837a.5.5 0 01-.707 0L14.55 7.538a.5.5 0 010-.707l.838-.838a1.677 1.677 0 011.191-.493 1.685 1.685 0 011.19 2.876z" />
  );

export default SvgPencilCircle;
