import { AllData } from "@/components/allData";
import { SelectedData } from "@/components/selectedData";

export default function Home() {
  return (
    <main className="flex p-3 gap-x-3 min-h-screen">
      <AllData />
      <SelectedData />
    </main>
  );
}
