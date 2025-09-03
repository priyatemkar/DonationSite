import React,{useState} from "react";
import MapComponent from "../../components/MapComponent";
import NGODashboard from "./NGODashboard"; 
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";

const TopNavbar = () => (
  <div className="flex justify-between items-center px-6 py-4 bg-[#002D3D] text-white">
    <div className="flex items-center space-x-2">
      
      <h1 className="font-bold text-xl">Donate Verse</h1>
    </div>


  <ul className="flex items-center space-x-6 text-sm">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/RestaurantDashboard">Restaurant Dashboard</Link></li>
  <li><Link to="/ngologin">Log Out</Link></li>
  
  </ul>

    
    
  </div>
);



const Sidebar = ({ activeSection, setActiveSection }) => (
  <div className="w-60 bg-[#F9F9F9] h-screen p-6">
    <h2 className="text-lg font-semibold mb-4">Welcome,<br />Helping Hands NGO</h2>
    <ul className="space-y-4 text-gray-700">
      <li
        className="hover:bg-gray-200 rounded px-3 py-2 cursor-pointer"
        onClick={() => setActiveSection("notifications")}
      >
        🔔 Notifications
      </li>
      <li
       className={`rounded px-3 py-2 cursor-pointer ${
          activeSection === "notifications" ? "bg-gray-200" : "hover:bg-gray-200"
        }`}
        onClick={() => setActiveSection("dashboard")}
      >
        🏠 Dashboard
      </li>
      <li
        className="hover:bg-gray-200 px-3 py-2 rounded cursor-pointer"
        onClick={() => setActiveSection("settings")}
      >
        ⚙ Settings
      </li>
      <li
        className="hover:bg-gray-200 px-3 py-2 rounded cursor-pointer"
        onClick={() => setActiveSection("availableOrders")}
      >
        📋 Available Orders
      </li>
    </ul>
  </div>
);


const SearchBar = () => (
  <input
    type="text"
    placeholder="Search Restaurants by name....."
    className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm mb-4"
  />
);

const Tabs = () => (
  <div className="flex space-x-4 mb-4">
    <button className="px-4 py-1 border rounded-full bg-white">All</button>
    <button className="px-4 py-1 border rounded-full bg-white">Unread</button>
    <button className="px-4 py-1 border rounded-full bg-white">Collected</button>
  </div>
);

const DonationCard = ({ setActiveSection }) => (
  <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Posted 25 mins ago</p>
        <h2 className="text-lg font-semibold">New Donation Available</h2>
        <p className="text-sm text-gray-600">Fresh prepared meals available for collection</p>
      </div>
      <span className="bg-orange-400 text-white text-sm px-3 py-1 rounded-full">New</span>
    </div>

    <div className="flex items-center mt-4 space-x-4">
        <img src="https://tse1.mm.bing.net/th/id/OIP.SJKsDbOs-85-asphNuFbFQHaHa?pid=Api&P=0&h=180" alt="icon" height={15} width={15}  />
        <p>Savali Pure Veg</p>
        <div className="flex items-center space-x-1">
        <img src="https://tse2.mm.bing.net/th/id/OIP.Avb_-PqcUJyInQX2LWLCEwHaJk?pid=Api&P=0&h=180" alt="location" height={15} width={15} />
        <p>1.2 kms away</p>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
      <p><strong>Quantity:</strong> 50 Servings</p>
      <p><strong>Expires in:</strong> 2 hrs</p>
      <p><strong>Food type:</strong> Vegetarian</p>
      <p><strong>Contact:</strong> 9529612345</p>
    </div>

     <div className="mt-4 ml-100 flex flex-wrap gap-3">
  <button className="ml-10 rounded bg-blue-400 px-6 py-4 text-white">Accept</button>
  <button className="rounded bg-gray-300 px-6 py-4">Deny</button>
</div>
<div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
   <button
        className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => setActiveSection("livechat")}
      >
        Live Chat
      </button>
</div>
  </div>
);
const DonationCardcollected = ({ setActiveSection })=>(
  <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">Posted 25 mins ago</p>
        <h2 className="text-lg font-semibold">New Donation Available</h2>
        <p className="text-sm text-gray-600">Fresh prepared meals available for collection</p>
      </div>
      <span className="bg-green-400 text-white text-sm px-3 py-1 rounded-full">Collected</span>
    </div>

    <div className="flex items-center mt-4 space-x-4">
      <img src="https://tse1.mm.bing.net/th/id/OIP.SJKsDbOs-85-asphNuFbFQHaHa?pid=Api&P=0&h=180" alt="icon" height={15} width={15}  />
      <p>Navmi Pure Veg</p>
      <div className="flex items-center space-x-1">
        <img src="https://tse2.mm.bing.net/th/id/OIP.Avb_-PqcUJyInQX2LWLCEwHaJk?pid=Api&P=0&h=180" alt="location" height={15} width={15} />
        <p>2 kms away</p>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
      <p><strong>Quantity:</strong> 50 Servings</p>
      <p><strong>Expires in:</strong> 2 hrs</p>
      <p><strong>Food type:</strong> Vegetarian</p>
      <p><strong>Contact:</strong> 9529612345</p>
    </div>
<div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
  <button
  className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white"
  onClick={() => setActiveSection("livechat")}
>
  Live Chat
</button>
</div>
  </div>
);


const DonationCardPending = ({ setActiveSection })=>(
 <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Posted 30 mins ago</p>
          <h2 className="text-lg font-semibold">Buffet Donation Available</h2>
          <p className="text-sm text-gray-500">Large Quantity Form Event</p>
        </div>
        <div className="text-right">
          <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded">
            Pending
          </span>
          <p className="text-sm font-semibold mt-1">
            Pick up By: <span className="text-black">9:00 pm</span>
          </p>
        </div>
      </div>

    <div className="flex items-center mt-4 space-x-4">
      <img src="https://tse1.mm.bing.net/th/id/OIP.SJKsDbOs-85-asphNuFbFQHaHa?pid=Api&P=0&h=180" alt="icon" height={15} width={15}  />
      <p>Navmi Pure Veg</p>
      <div className="flex items-center space-x-1">
        <img src="https://tse2.mm.bing.net/th/id/OIP.Avb_-PqcUJyInQX2LWLCEwHaJk?pid=Api&P=0&h=180" alt="location" height={15} width={15} />
        <p>2 kms away</p>
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
      <p><strong>Quantity:</strong> 50 Servings</p>
      <p><strong>Expires in:</strong> 2 hrs</p>
      <p><strong>Food type:</strong> Vegetarian</p>
      <p><strong>Contact:</strong> 9529612345</p>
    </div>





<div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
  <button
  className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white"
  onClick={() => setActiveSection("livechat")}
>
  Live Chat
</button>
</div>
  </div>
);
const DonationCardaccepted=({ setActiveSection })=>(

 <div className="border rounded-md p-4 shadow-md mb-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Posted 30 mins ago</p>
          <h2 className="text-lg font-semibold">Buffet Donation Available</h2>
          <p className="text-sm text-gray-500">Large Quantity Form Event</p>
        </div>
        <div className="text-right">
          <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded">
            Pending
          </span>
          <p className="text-sm font-semibold mt-1">
            Pick up By: <span className="text-black">9:00 pm</span>
          </p>
        </div>
      </div>

      {/* Location Info */}
      <div className="flex mt-4 gap-4">
        <div className="flex-1">
          <div className="flex items-center mt-4 space-x-1">
      <img src="https://tse1.mm.bing.net/th/id/OIP.SJKsDbOs-85-asphNuFbFQHaHa?pid=Api&P=0&h=180" alt="icon" height={15} width={15}  />
      <p>Savali Pure Veg</p>
      <div className="flex items-center space-x-1">
        <img src="https://tse2.mm.bing.net/th/id/OIP.Avb_-PqcUJyInQX2LWLCEwHaJk?pid=Api&P=0&h=180" alt="location" height={15} width={15} />
        <p>1.2 kms away</p>
      </div>
    </div>
          

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-y-2 text-sm mb-2">
            <p><span className="font-semibold">Quantity:</span> 100–130 Servings</p>
            <p><span className="font-semibold">Expires in:</span> 2 hrs</p>
            <p><span className="font-semibold">Food type:</span> Mixed</p>
            <p><span className="font-semibold">Contact:</span> 9529612345</p>
          </div>

          {/* Special Instruction */}
          <p className="text-sm text-gray-700 mt-2">
            <span className="font-semibold">Special Instruction:</span><br />
            The quantity is more so bring a big vehicle to pick it
          </p>

          {/* Chat Button */}
          <div className="mx-[40px] mt-4 flex  flex-wrap gap-3">
  <button
  className="w-[300px] rounded bg-blue-600 px-4 py-2 text-white"
  onClick={() => setActiveSection("livechat")}
>
  Live Chat
</button>
</div>
        </div>

        {/* Static Map Placeholder */}
        <div>
          <div style={{ height: "200px", width: "500px" }}>
  <MapComponent lat={19.0760} lon={72.8777} />
</div>
          
          {/* Replace above src with your map or image */}  
        </div>
      </div>
    </div>
);

  const MainContent = ({ activeSection, setActiveSection  }) => (
  <div className="flex-1 p-6 bg-gray-50 min-h-screen">
    
    {activeSection === "notifications" && (
      <>
        <SearchBar />
        <div className="bg-[#002D3D] text-white font-semibold text-lg px-6 py-2 rounded mb-4">
      Donor Details
    </div>
        <Tabs /> 
        <DonationCard setActiveSection={setActiveSection} />
        <DonationCardcollected setActiveSection={setActiveSection} />
        <DonationCardPending setActiveSection={setActiveSection} />
      </>
    )}
    {activeSection === "availableOrders" && (
      <>
        <DonationCardaccepted setActiveSection={setActiveSection} />
      </>
    )}
    {activeSection === "dashboard" && (
  <NGODashboard onNavigate={(page) => console.log("Navigate to:", page)} />
)}

    {activeSection === "settings" && (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button className="px-4 py-2 border rounded">Update Profile</button>
        <button className="px-4 py-2 border rounded">Change Password</button>
        <button className="px-4 py-2 border rounded">Notification Preferences</button>
      </div>
    )}

    {activeSection === "livechat" && <LiveChat />}
  </div>
);



const DonateVerseDashboard = () => {
  const [activeSection, setActiveSection] = useState("notifications");

  return (
    <div>
      <TopNavbar />
      <div className="flex">
        <Sidebar setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
};


export default DonateVerseDashboard;