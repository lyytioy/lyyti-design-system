import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import LanguageSelector, { LanguageSelectProps } from '../../components/LanguageSelector';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'Components/Inputs/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    docs: {
      description: {
        component: 'Language selector is used to select language from given options.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
  },
  args: {
    multiple: false,
  },
} as Meta;

const SelectTemplate: Story<LanguageSelectProps> = (args) => {
  const [selectValue, setSelectValue] = useState('0');

  args.value = selectValue;
  args.onChange = (e: ChangeEvent<HTMLInputElement>) => setSelectValue(e.target.value);

  return (
    <ThemeSelector>
      <LanguageSelector
        {...args}
        options={[
          { id: 0, value: 'English' },
          { id: 1, value: 'Espanol' },
          { id: 2, value: 'Dansk' },
          { id: 3, value: 'Italiana' },
        ]}
      />
    </ThemeSelector>
  );
};

export const Default = SelectTemplate.bind({});
Default.args = {};

export const LargeWithLabel = SelectTemplate.bind({});
LargeWithLabel.args = {
  margin: 'normal',
  label: 'Label',
};

export const HelperText = SelectTemplate.bind({});
HelperText.args = {
  helperText: 'Helper text',
};

export const Error = SelectTemplate.bind({});
Error.args = {
  helperText: 'Helper text',
  error: true,
};

export const Disabled = SelectTemplate.bind({});
Disabled.args = {
  helperText: 'Helper text',
  disabled: true,
};

export const White = SelectTemplate.bind({});
White.args = {
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
