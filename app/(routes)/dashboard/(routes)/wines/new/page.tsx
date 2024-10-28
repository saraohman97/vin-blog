import prismadb from "@/lib/prismadb";
import Heading from "@/components/ui/heading";
import WineForm from "./(components)/wine-form";
import { Separator } from "@/components/ui/separator";

// const WinePage = async () => {
const WinePage = async ({ 
  params 
}: { 
  params: { wineId: string } 
}) => {
  // const wine = await prismadb.wine.findUnique({
  //   where: {
  //     id: params.wineId,
  //   },
  // });

// <--- This is for the edit page. 

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* <Heading title="Wines" description="Add another wine" /> */}
      {/* <div>
        <h3 className=" font-bold text-lg font-sans mt-10">Add wine</h3>
        <p className="mb-4 text-sm font-sans">Add another brand for the blog</p>
      </div>

      <Separator className="mb-4" /> */}

      <WineForm
        // initialData={wine}
      />
    </div>
  );
};

export default WinePage;
