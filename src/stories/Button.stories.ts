import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@/shared/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default button",
    disabled: false,
    onClick: fn(),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Destructive button",
    disabled: false,
    onClick: fn(),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline button",
    disabled: false,
    onClick: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary button",
    disabled: false,
    onClick: fn(),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost button",
    disabled: false,
    onClick: fn(),
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Link button",
    disabled: false,
    onClick: fn(),
  },
};
