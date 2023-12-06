import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({
  size,
  value,
  isDisabled,
  onChange,
}) => (
  <div style={{ padding: 10 }}>
    <Checkbox
      value={value}
      size={size}
      isDisabled={isDisabled}
      onChange={onChange}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  value: "Label",
};
Default.parameters = {
  viewMode: "docs",
};
