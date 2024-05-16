import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import "@repo/ui/style.css";
import "../src/index.css";
import { Providers } from "../src/context/providers";
import React from "react";

const preview: Preview = {
  tags: ["autodocs"], // Autogenerates a Storybook docs page for every story
  parameters: {
    options: {
      storySort: {
        order: ["Design System"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "grey",
      values: [
        { name: "black", value: "#000000" },
        { name: "white", value: "#ffffff" },
        { name: "grey", value: "#808080" },
      ],
    },
  },

  decorators: [
    withRouter,
    (Story) => (
      <Providers disableDevTools>
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
