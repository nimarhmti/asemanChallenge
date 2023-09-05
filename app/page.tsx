import { AllData } from "@/components/allData";
import { SelectedData } from "@/components/selectedData";

export default function Home() {
  return (
    <main className="flex p-3 h-screen gap-x-3">
      <AllData />
      <SelectedData />
    </main>
  );
}
