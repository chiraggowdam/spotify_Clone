import getsongs from "@/actions/getsongs";
import Header from "@/components/Header";
import Listitem from "@/components/Listitem";
import Pagecontent from "./component/pagecontent";

const revalidate = 0;

export default async function Home() {

  const songs = await getsongs();

 
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2 ">
          <h1 className="text-white text-3xl font-semibold">
            Welcome Back
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <Listitem image="/images/liked.png"
            name="Liked songs "
            href="liked"/>
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-4 px-6 ">
        <div className="flex justify-between items-center ">
          <h1 className="text-white text-2xl font-semibold ">
            Newest Songs
          </h1>
        </div>
         <div >
           <Pagecontent songs={songs} />
         </div>
      </div>
      </div>
  );
}
