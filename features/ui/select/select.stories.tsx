import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = ({
  labelText,
  optionsData,
  iconPath,
  iconAlt,
  placeholderText,
  hintText,
  selectError,
  errorText,
  isDisabled,
  handler,
}) => (
  <Select
    labelText={labelText}
    optionsData={optionsData}
    iconPath={iconPath}
    iconAlt={iconAlt}
    hintText={hintText}
    selectError={selectError}
    errorText={errorText}
    placeholderText={placeholderText}
    isDisabled={isDisabled}
    handler={handler}
  ></Select>
);

export const Default = Template.bind({});
Default.args = {
  labelText: "Team Member",
  optionsData: [
    { param: "fake", value: "option1", text: "Option 1" },
    { param: "fake", value: "option2", text: "Option 2" },
    { param: "fake", value: "option3", text: "Option 3" },
    { param: "fake", value: "option4", text: "Option 4" },
    { param: "fake", value: "option5", text: "Option 5" },
    { param: "fake", value: "option6", text: "Option 6" },
  ],
  iconPath: "../icons/user.svg",
  iconAlt: "Test Alt",
  hintText: "This is a hint text to help user.",
  errorText: "This is an error message.",
  placeholderText: "Select a team member",
};
Default.parameters = {
  viewMode: "docs",
};
