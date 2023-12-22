// import { Link } from "react-router-dom";
// import { DefaultAccordion } from "../../components/Accordion/DefaultAccordion";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { ImPriceTags } from "react-icons/im";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
// import AllPosts from "../AllPosts/AllPosts";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Link, useLoaderData } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useEffect, useState } from "react";
// import Tags from "../../components/Tags/Tags";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { TbDeviceImacCog } from "react-icons/tb";
import { ImUserTie } from "react-icons/im";
import { RiBankLine } from "react-icons/ri";

const Home = () => {
  // const { count } = useLoaderData();
  // const [searchText, setSearchText] = useState();
  // const [tag, setTag] = useState();
  // const [allPosts, setAllPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  // const [newest, setNewest] = useState(true);
  // const [allAnnouncements, setAllAnnouncements] = useState();
  // const axiosSecure = useAxiosSecure();
/* 
  useEffect(() => {
    axiosSecure
      .get("/allAnnouncements")
      .then((res) => setAllAnnouncements(res.data));
  }, [axiosSecure]); */

/*   useEffect(() => {
    axiosSecure.get("/allTags").then((res) => setTag(res.data));
  }, [axiosSecure]); */

/*   useEffect(() => {
    const fetchData = async () => {
      const res = await axiosSecure.get(
        `/posts?page=${currentPage}&size=${itemsPerPage}&sortSystem=${
          newest ? "newest" : "popular"
        }&searchText=${searchText}`
      );
      setAllPosts(res.data);
    };

    fetchData();
  }, [currentPage, itemsPerPage, newest, axiosSecure, searchText]); */

/*   const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    setSearchText(form.search.value);
  }; */

/*   const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  }; */

/*   const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }; */

  const strokeStyle = {
    '-webkit-text-fill-color': 'transparent',
    '-webkit-text-stroke-width': '1px',
    '-webkit-text-stroke-color': 'white',
    
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>TaskHub | HOME</title>
        </Helmet>
        
        {/* <div
          className="hero h-[100vh] -mt-24"
          style={{
            backgroundImage: "url(https://i.ibb.co/4NkwGtc/glenn-carstens-peters-RLw-UC03-Gw.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor:'white'
            
            
          }}
        ></div> */}

        {/* Hero Section  */}
        <div
          className="hero h-[100vh] -mt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-10"
          
        >
          
            
              <div className="md:flex md:flex-row justify-between items-center w-11/12 mx-auto ">
                <div className="text-left md:block hidden">
                  <h1 className="mb-0 text-base md:text-base tracking-wider font-poppins font-medium text-white">
                    WELCOME TO TASKHUB
                  </h1>
                  <p className="mt-3 mb-6 font-poppins uppercase text-white lg:text-6xl md:text-5xl text-3xl font-bold">
                    Manage your <br/> <span style={strokeStyle} className="tracking-widest">[Task]</span> Efficiently
                  </p>
                  <button className="md:px-8 px-6 text-white py-3 font-bold rounded-full relative z-10 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-indigo-600 hover:to-pink-600 font-roboto lg:text-sm md:text-sm">Let's Explore</button>
                  
                 
                </div>
                <div className="md:w-[40%] w-[40%] relative z-10 ">
                  <img src="https://i.ibb.co/rfr1xfW/Trello-UICollage-4x.webp" alt="" />                 
                </div>
                <div className="text-left md:hidden block">
                  <h1 className="mb-0 text-base md:text-base tracking-wider font-poppins font-medium text-white">
                    WELCOME TO TASKHUB
                  </h1>
                  <p className="mt-3 mb-6 font-poppins uppercase text-white lg:text-6xl md:text-4xl text-3xl font-bold">
                    Manage your <br/> <span style={strokeStyle} className="tracking-widest">[Task]</span> Efficiently
                  </p>
                  <button className="md:px-8 px-6 text-white py-3 font-bold rounded-full relative z-10 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-indigo-600 hover:to-pink-600 font-roboto lg:text-base md:text-sm">Let's Explore</button>
                  
                 
                </div>
              </div>
            
        </div>

        <div className="lg:-mt-[250px] md:-mt-[150px] -mt-[100px] z-0">
          <img className="relative" src="https://i.ibb.co/khJGcQV/hero-bg.png" alt="" />
        </div>



        {/* WHAT PEOPLE USING "TASKHUB" Section  */}
        <div className= "w-10/12 mx-auto py-10">
          <SectionTitle heading={'What People Using "TaskHub"'}></SectionTitle>

          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-8">
          <div style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#e9499dbd'
            // background: 'linear-gradient(#ff4032, #00d4ff)'

          }} className="h-40 flex flex-col gap-2 justify-center items-center rounded-2xl shadow-2xl transition-transform ease-linear duration-200 hover:transform hover:-translate-y-2" >
            <FaUserDoctor className="text-5xl text-white" />
            <h1 className="md:text-2xl text-xl font-poppins font-semibold">Doctors</h1>
          </div>

          
          <div style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#e9499dbd'
            // background: 'linear-gradient(#ff4032, #00d4ff)'

          }} className="h-40 flex flex-col gap-2 justify-center items-center rounded-2xl shadow-2xl transition-transform ease-linear duration-200 hover:transform hover:-translate-y-2" >
            <TbDeviceImacCog className="text-5xl text-white" />
            <h1 className="md:text-2xl text-xl font-poppins font-semibold">Developers</h1>
          </div>

          
          <div style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#e9499dbd'
            // background: 'linear-gradient(#ff4032, #00d4ff)'

          }} className="h-40 flex flex-col gap-2 justify-center items-center rounded-2xl shadow-2xl transition-transform ease-linear duration-200 hover:transform hover:-translate-y-2" >
            <RiBankLine  className="text-5xl text-white" />
            <h1 className="md:text-2xl text-xl font-poppins font-semibold">Bankers</h1>
          </div>

          
          <div style={{
            backgroundImage: "url(https://i.ibb.co/2KkYLkG/circle.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: '#e9499dbd'
            // background: 'linear-gradient(#ff4032, #00d4ff)'

          }} className="h-40 flex flex-col gap-2 justify-center items-center rounded-2xl shadow-2xl transition-transform ease-linear duration-200 hover:transform hover:-translate-y-2" >
            <ImUserTie className="text-5xl block text-white" />
            <h1 className="md:text-2xl text-xl font-poppins font-semibold">Corporates</h1>
          </div>

          

          </div>
          

          
        </div>

        {/* Newsletter section */}
        <div>
          <div
            className="hero h-[200px] md:h-[250px] bg-gray-900 mt-5"
            style={{
              backgroundImage: "url(https://i.ibb.co/0mMnGqq/newsletter.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-10 "></div>
            <div className=" text-neutral-content w-10/12">
              <div className="grid md:grid-cols-1 grid-cols-1 justify-between pb-5">

                <div className="flex lg:text-4xl md:text-2xl text-2xl justify-center items-center pb-5 mb-5 md:pb-0 text-white gap-3">
                  <BsEnvelopeOpenHeart />
                  <h1 className="font-semibold">Join to Us</h1>
                </div>

                <div className="relative h-10 md:w-6/12 w-10/12 mx-auto">
                  <div className="absolute top-2/4 right-3 grid h-10 w-10 -translate-y-1/4 place-items-center text-4xl text-blue-gray-500 text-pink-600">
                    <IoIosSend />
                  </div>
                  <input
                    className="peer h-14 w-full rounded-[7px] bg-white border px-3 py-6 !pr-9 font-sans text-base font-normal text-blue-gray-700 outline outline-0 text-pink-600"
                    placeholder="Enter your email address "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
