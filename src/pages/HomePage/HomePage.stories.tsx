import { ComponentStory, ComponentMeta } from "@storybook/react";

import HomePage from ".";

export default {
  title: "HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const HomePageTemplate: ComponentStory<typeof HomePage> = (args) => (
  <HomePage />
);

export const Default = HomePageTemplate.bind({});

Default.args = {};
