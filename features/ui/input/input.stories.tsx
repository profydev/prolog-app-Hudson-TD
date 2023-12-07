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
  labelText,
  iconPath,
  iconAlt,
  placeholderText,
  hintText,
  inputError,
  errorText,
  isDisabled,
}) => (
  <Input
    type={type}
    labelText={labelText}
    iconPath={iconPath}
    iconAlt={iconAlt}
    hintText={hintText}
    inputError={inputError}
    errorText={errorText}
    placeholderText={placeholderText}
    isDisabled={isDisabled}
  />
);

export const Default = Template.bind({});
Default.args = {
  type: "text",
  labelText: "Email",
  iconPath: "../icons/mail.svg",
  iconAlt: "Test Alt",
  hintText: "This is a hint text to help user.",
  errorText: "This is an error message.",
  placeholderText: "Zoro.Roronoa@OnePiece.com",
};
Default.parameters = {
  viewMode: "docs",
};
