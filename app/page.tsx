import { Hero } from "@/components";
import Image from "next/image";
import CustomFilter from "@/components/customFilter";
import SearchBar from "@/components/searchBar";
import { fetchCar } from "@/utils";
import CarCard from "@/components/CarCard"

export default async function Home() {
  const allCars = await fetchCar();
  const emptyCars = !Array.isArray(allCars)|| allCars.length<1 || !allCars
  return (
      <main className="overflow-hidden">
        <Hero/>
        <div className=" mt-12 padding-y padding-x max-width" id = "discover" >
          <div className="home__text-container">
            <h1 className="text-4xl"></h1>
            <p>ا</p>
          </div>
        
          <div className="home__filters">
              <SearchBar/>
              <div className="home__filter-container">
                <CustomFilter title = "fuel"/>
                <CustomFilter title = "year"/>
              </div>
          </div>  

          {!emptyCars ?(
             <section>
                <div>
                    {allCars.map((car)=>(
                      <CarCard car = {car}/>  
                    ))}
                </div>
             </section>
          ):(
            <div className="home__text-container">
                <h2 className="text-black text-xl">no result</h2>
                <p>{allCars?.message}</p>
            </div>
          )}
          </div>   
      </main>
  );
}
