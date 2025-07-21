

export default function Home() {
  return (
    <section className="pt-10 pb-20 md:pt-14 md:pb-24">
            <div className="max-w-[80rem] mx-auto px-4 py-4">
                <div className="grid grid-cols-1 text-center">
                    <div>
                        <h1 className="font-semibold text-5xl" ><span className=" font-bold text-transparent bg-gradient-to-r from-red-600 to-blue-400 bg-clip-text">UNLOCK</span><span className=" font-bold text-transparent bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text"> OUR WEBSITE </span></h1>
                        <p className="font-semibold">Explore opportunities from across the globe to grow, showcase skills, gain CV points </p>
                     </div>
                 </div>
            </div>
            
               <div className="max-w-[65rem] max-full mx-auto px-4 py-3 ">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-5 border rounded-md hover:border hover:border-red-700">
                       <h1 className=" mb-3 text-xl font-bold ">Internships</h1>
                       <p>Gain
                        Practical
                        Experience</p>
                     </div>
                       <div className="p-5 border rounded-md hover:border hover:border-green-700">
                        <h1 className=" mb-3 text-xl font-bold ">Mentorships</h1>
                       <p>Guidance from  top Mentor</p>
                     </div>
                     <div className="p-5 border rounded-md hover:border hover:border-blue-700">
                       <h1 className=" mb-3 text-xl font-bold ">Jobs</h1>
                       <p>Explore the diverce carriers </p>
                     </div>
                     <div className="p-5 border rounded-md hover:border hover:border-purple-700">
                       <h1 className=" mb-3 text-xl font-bold ">Practice</h1>
                       <p>Refine 
                        Skills Daily
                       </p>
                     </div>
                 </div>
            
            </div>
             
                
                 
           
            
    </section>
  )
}
