import { Assembly } from "@/components/Assembly";
import { Council } from "@/components/Council";
import { Tab, TabContent } from "../components/Tab";
import { Corporate } from "@/components/Corporate";

export default function Home() {
  return (
    <>
      <nav style={{ display: "flex" }}>
        <Tab id="assembly" name="Собрание" />
        <Tab id="council" name="Совет" />
        <Tab id="corporate" name="Корпорации" />
      </nav>
      <main>
        <TabContent id="assembly" Component={<Assembly />} />
        <TabContent id="council" Component={<Council />} />
        <TabContent id="corporate" Component={<Corporate />} />
      </main>
    </>
  );
}
