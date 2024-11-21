import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "../../features/userActions";

function Hero() {
  const [ogUrl,setUrl] = useState('')
  const dipatch = useDispatch()
  const {url} = useSelector(state=>state.user )
  const handleUrl = ()=>{
    dipatch(shortenUrl({url:ogUrl}))
  }
  return (
    <div className="w-full flex justify-center mt-[5rem] overflow-hidden">
      <div className="relative w-[80%] h-[77dvh] rounded-md overflow-hidden">
        <img
          src="/assets/banner.png"
          alt="banner"
          className="w-full h-full object-cover rounded-md"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 p-6bg-gradient-to-b from-black/70 to-black/30">
          <h1 className="font-bold text-4xl text-white drop-shadow-lg">
            URL Shortener
          </h1>
          <h4 className="text-white text-2xl font-semibold drop-shadow-md text-center">
            Paste your untidy link to shorten it
          </h4>
          <span className="text-white text-lg text-center max-w-xl drop-shadow-sm">
            Feel free to shorten a URL or reduce a link. Use our URL Shortener
            to create a shortened and neat link, making it easy to remember.
          </span>
          <div className="w-[80%] h-[4rem] bg-white flex">
            <input type="text" name="" id="" className="  w-[80%] h-full outline-none p-3" value={ogUrl} onChange={(e)=>setUrl(e.target.value)} />
            <button className="flex-grow text-2xl font-bold bg-gray-200 hover:bg-gray-400 hover:text-white" onClick={handleUrl}>Shorten URL</button>
          </div>
         {ogUrl && <h1 className="text-white">https://shortyurlshortener.vercel.app/{url}</h1> }
        </div>
      </div>
    </div>
  );
}

export default Hero;
