import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../../Organism/Header/Index";
import Footer from "../../Organism/Footer/Index";
import BookDetailView from "./Index";
import BookDetail from "../../Organism/BookDetails/Index";
import cardIm from "/Images/cardImage2.png";

export default {
  title: "Templates/BookDetailView",
  component: BookDetailView,
} as ComponentMeta<typeof BookDetailView>;

const Template: ComponentStory<typeof BookDetailView> = (args) => (
  <BookDetailView {...args} />
);

export const ViewBookDetails = Template.bind({});
ViewBookDetails.args = {
  header: <Header />,
  footer: <Footer />,
  bookDetailOrg: (
    <BookDetail/>
  ),
};
