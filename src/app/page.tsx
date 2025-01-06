import Link from "next/link";

export default function Home() {
  return (
    <div
      className=" home bg-[lightBlog] w-[100vw]  flex flex-col gap-[20px] justify-center items-center"
      style={{ height: `calc(100vh - 104px)`, }} 
    >
      <h1 className="md:text-[60px] text-[#F564A9] font-black">Welcome To My Blog</h1>
      <p className="md:w-[60%] w-[80%] text-center text-[18px]">
        Hi, I’m Farman Khan! Join me on my journey as I explore the latest
        advancements in technology, share programming tips, and dive into
        exciting innovations. Whether you're a fellow tech enthusiast or someone
        looking to learn more, there's always something new to discover here.
        Thanks for visiting, and let’s explore together!
      </p>
      <Link href={'Blog/'} className="h-12 w-[140px] bg-[#533B4D] rounded-[10px] text-white tracking-[0.6px] hover:scale-[1.01] active:scale-[0.99] text-center content-center" >Explore Blogs</Link>
      <div className=' h-12 text-center content-center absolute bottom-0 w-full'>
        @ 2024 Farman's Blog All Rights Reserved
    </div>
    </div>
    
  );
}
