import Banner from "../assets/Hero.jpg"
import four from "../assets/IMG-20231125-WA0248.jpg"
import one from "../assets/intentive.jpg"
import two from "../assets/IMG-20231125-WA0268.jpg"
import three from "../assets/7G1A8294007.jpg"

import { Carousel } from 'flowbite-react';

function hero(){
    return (
        <div className=" h-72 lg:h-[560px] mt-5">
        <Carousel slideInterval={5000}>
          <img className="bg-contain" src = {Banner} alt="..." />
          <img src = {four} alt="..." />
          <img src={one} alt="..." />
          <img src={two} alt="..." />
          <img src={three} alt="..." />
        </Carousel>
      </div>
       

    )
}
export default hero