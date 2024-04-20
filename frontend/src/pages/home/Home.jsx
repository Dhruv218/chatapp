import { Link, useNavigation } from "react-router-dom";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
   return (
    <>
      <div className="flex flex-col items-center justify-center">
	  <Link to='/Dashboard' class="relative inline-flex items-center justify-center mb-4 outline-none p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 outline-none bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Go to Dashboard
          </span>
        </Link>
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <Sidebar />
          <MessageContainer />
        </div>
         
      </div>
    </>
  );
};
export default Home;
