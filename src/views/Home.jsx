import AssetInstructions from "../component/AssetInstruction";
import Assets from "../component/Assets";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import HomeMintButton from "../component/HomeMintButton";
import MintAsset from "../component/MintAsset";
import RegisterUser from "../component/RegisterUser";
import VerifyUser from "../component/verify";
import { useGlobalState } from "../store";

const Home = () => {
  const [assets] = useGlobalState("assets");
  return (
    <>
    <div className="bg-teal-50">
    <Hero />
      <Assets assets={assets} />
      <div className="flex justify-center items-center my-5 ">
        <button
          className=" inline-block justify-center space bg-yellow-500 px-5 py-2
            rounded-full text-white shadow-md shadow-gray-900 hover:shadow-yellow-800 font-semibold
            text-sm uppercase leading-tight border border-white"
        >
          Load More
        </button>
      </div>
      <MintAsset />
      <HomeMintButton />
      <RegisterUser/>
      <VerifyUser/>
      <AssetInstructions/>
      {/* <Footer /> */}
    </div>
     
    </>
  );
};

export default Home;
