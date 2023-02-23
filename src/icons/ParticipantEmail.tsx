import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ParticipantEmail = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      clipRule="evenodd"
      d="M8.667 10.433c2.25 0 4.074-1.888 4.074-4.216C12.74 3.887 10.917 2 8.667 2S4.593 3.888 4.593 6.217c0 2.328 1.824 4.216 4.074 4.216Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M1.25 18.867a.75.75 0 0 0 1.5 0h-1.5Zm7.417-6.9.007-.75h-.007v.75ZM13.75 15.5v.75h1.5v-.75h-1.5Zm-11 3.367c0-3.421 2.673-6.15 5.917-6.15v-1.5c-4.12 0-7.417 3.45-7.417 7.65h1.5Zm5.91-6.15c1.444.014 2.746.676 3.71 1.432.479.375.855.758 1.106 1.066a2.952 2.952 0 0 1 .287.415l.007.014.002.005-.003-.007a.52.52 0 0 1-.02-.142h1.501c0-.167-.047-.309-.08-.392a2.016 2.016 0 0 0-.134-.276 4.405 4.405 0 0 0-.397-.564 8.599 8.599 0 0 0-1.343-1.3c-1.119-.877-2.734-1.732-4.622-1.751l-.015 1.5Z"
      fill="currentColor"
      stroke="currentColor"
    />,
    <path
      clipRule="evenodd"
      d="M10 17.5a1.5 1.5 0 0 1 1.5-1.5h8.111a1.5 1.5 0 0 1 1.5 1.5v4.667a1.5 1.5 0 0 1-1.5 1.5H11.5a1.5 1.5 0 0 1-1.5-1.5V17.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="m17.193 19.558 1.883 1.801M13.552 19.558l-1.883 1.801M20.746 17.023l-4.698 3.352c-.406.29-.944.29-1.35 0L10 17.023"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
export default ParticipantEmail;
