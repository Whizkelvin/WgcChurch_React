import PastorPic from '../assets/Pastor.jpg'

function Messages () {

    return (

    <div id='Messages' className='scroll-mt-[105px]' >
        <h1 className=" bg-blue-900 p-4 text-center text-lg mt-8 text-white font-bold uppercase lg:text-2xl ">Here, you can download or listen to our Family Sunday Service messages.</h1>
      
        <div  className=' px-12 lg:grid lg:grid-cols-4 lg:gap-6 lg:grid-rows-6 shadoow-md tanstsion-all duration-500 ease-in-out'>

            {/* 7th January, 2024  */}
            <section className='justify-center items-center text-center space-y-5 border border-1-black p-5 rounded-xl mt-8'>
                    <img className='border-0 rounded-full w-full' src={PastorPic} alt="Ps Derrick Pic" />
                        <h1 className='text-3xl font-bold font-serif'>Sunday 7th Jan, 2024</h1>
                            <h2 className='text-xl font-bold font-serif'> Title: <br /> Sacrifice By Faith</h2>
                                <h3 className="text-xl font-bold font-serif"> Message by : <br /><span className="text-blue-700"> Pastor Derrick Diaba Senyo</span></h3>
                                    <p className="font-bold">So then faith cometh by hearing, and hearing by the word of God. <br />Romans 10:17 </p> 
                                    <a href="https://drive.google.com/file/d/1N8MlDfG4e4w99mHA9s4fK6zGh_f-jtCX/view?usp=sharing" download> <button className='uppercase font-mono font-bold border-red-500 bg-blue-300 p-5 text-red-700 mt-3'>download or listen here</button></a>
            </section>

            {/* 14th January, 2024 */}
            <section className='justify-center items-center text-center space-y-5 border border-1-black p-5 rounded-xl mt-8'>
                    <img className='border-0 rounded-full w-full' src={PastorPic} alt="Ps Derrick Pic" />
                        <h1 className='text-3xl font-bold font-serif'>Sunday 14th Jan, 2024</h1>
                            <h2 className='text-xl font-bold font-serif'> Title: <br /> Sacrifice By Prayer</h2>
                                <h3 className="text-xl font-bold font-serif"> Message by : <br /><span className="text-blue-700"> Pastor Derrick Diaba Senyo</span></h3>
                                    <p className="font-bold">Who in the days of his flesh, when he had offered up prayers and supplications. <br /> Hebrews 5:7 </p> 
                                     <a href="https://drive.google.com/file/d/1vFav9-PRjrBQdXWarBpM-tAhNs0mP_JC/view?usp=sharing" download> <button className='uppercase font-mono font-bold border-red-500 bg-blue-300 p-5 text-red-700 mt-3'>download or listen here</button></a>
            </section>

            {/* 21 January 2024 */}
            <section className='justify-center items-center text-center space-y-5 border border-1-black p-5 rounded-xl mt-8'>
                    <img className='border-0 rounded-full w-full' src={PastorPic} alt="Ps Derrick Pic" />
                        <h1 className='text-3xl font-bold font-serif'>Sunday 21th Jan, 2024</h1>
                            <h2 className='text-xl font-bold font-serif'> Title: <br /> School of the Spirit</h2>
                                <h3 className="text-xl font-bold font-serif"> Message by : <br /><span className="text-blue-700"> Pastor Derrick Diaba Senyo</span></h3>
                                    <p className="font-bold">  And he spake a parable unto them to this end, that men ought always to pray, and not to faint <br /> Luke 18:1 </p> 
                                    <a href="https://drive.google.com/file/d/1HDoj-Io16IJ111rYeOwP1m0CmsdoqkmO/view?usp=drivesdk" download> <button className='uppercase font-mono font-bold border-red-500 bg-blue-300 p-5 text-red-700 mt-3'>download or listen here</button></a>
            </section>

            

            
           
        </div>
    </div>
       
    )
}
export default Messages