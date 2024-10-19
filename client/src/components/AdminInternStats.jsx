import React, { useState, useEffect } from "react";
import graph1 from "@/assets/graph1.png"
import graph23 from "@/assets/graph23.png"
import graph4 from "@/assets/graph4.png"

const AdminInternStats = () => {
    const [interns, setInterns] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const totalInterns = interns.length;
    const activeInterns = interns.filter(i => i.status === 'Working' || i.status === 'On Leave').length;
    const inactiveInterns = interns.filter(i => i.status === 'Left' || i.status === 'Terminated').length;
    const recentJoiners = interns
      .filter(i => new Date(i.joiningDate) > new Date(new Date().setMonth(new Date().getMonth() - 1)))
      .length;
  
    useEffect(() => {
      const fetchInterns = async () => {
        try {
          const response = await fetch("/interns.json"); // Assuming the JSON is served from the public folder
          const data = await response.json();
          setInterns(data.interns);
          setLoading(false); // Data is loaded
        } catch (error) {
          console.error("Error fetching intern data:", error);
        }
      };
  
      fetchInterns();
    }, []);

    if (loading) return <div>Loading interns data...</div>;

  return (
    <div className="grid grid-cols-4 w-max gap-2">
      <div className="bg-[#b8c0e3] w-[135px] h-[170px] p-2 rounded-lg text-center">
            <div className='flex-col flex'>
                <h1 className='text-[15px] px-1 text-left font-mukta font-bold'>Total Interns <br /> {totalInterns} </h1>
                <img src={graph1} height={98} width={102} alt=""/>
            </div>
      </div>
      <div className="bg-[#F6A997] w-[135px] h-[170px] p-2 rounded-lg text-center">
            <div className='flex-col flex'>
                <h1 className='text-[15px] px-1 text-left font-mukta font-bold'>Active Interns<br /> {activeInterns} </h1>
                <img src={graph23} height={98} width={102} alt=""/>
            </div>
      </div>
      <div className="bg-[#FCE0BB] w-[135px] h-[170px] p-2 rounded-lg text-center">
            <div className='flex-col flex'>
                <h1 className='text-[15px] px-1 text-left font-mukta font-bold'>In-Active Interns<br /> {inactiveInterns} </h1>
                <img src={graph23} height={98} width={102} className="mt-2" alt=""/>
            </div>
      </div>
      <div className="bg-blue-200 w-[135px] h-[170px] p-2 rounded-lg text-center">
            <div className='flex-col flex'>
                <h1 className='text-[15px] px-1 text-left font-mukta font-bold'>Recent Joiners<br /> {recentJoiners} </h1>
                <img src={graph4} height={98} width={102} className="mt-2" alt=""/>
            </div>
      </div>
    </div>
  );
};

export default AdminInternStats;
