import { ComponentStory, ComponentMeta } from "@storybook/react";

import HomePage from ".";
import { ReviewService } from "../../domain/ReviewService";
import { ReviewServiceJson } from "../../infrastructure/ReviewServiceJson";

export default {
  title: "HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const service: ReviewService = ReviewServiceJson;

const HomePageTemplate: ComponentStory<typeof HomePage> = (args) => (
  <HomePage reviewService={service} />
);

export const Default = HomePageTemplate.bind({});

Default.args = {};
