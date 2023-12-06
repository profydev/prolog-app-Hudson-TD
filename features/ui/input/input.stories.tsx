import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({
  type,
  label,
  iconPath,
  iconAlt,
  hint,
  isRequired,
  errorMsg,
}) => (
  <Input
    type={type}
    label={label}
    iconPath={iconPath}
    iconAlt={iconAlt}
    hint={hint}
    isRequired={isRequired}
    errorMsg={errorMsg}
  />
);

export const Default = Template.bind({});
Default.args = {
  type: "text",
  label: "Testing Label",
  iconPath: "../../../public/icons/checkmark.svg",
  iconAlt: "Test Alt",
  hint: "This is a hint",
  isRequired: true,
  errorMsg: "This is an error message",
};
Default.parameters = {
  viewMode: "docs",
};
