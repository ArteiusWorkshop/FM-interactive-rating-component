import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";
import { ButtonBar } from "../components/ui";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <ButtonBar />
    </BaseLayout>
  );
};

export default Home;
