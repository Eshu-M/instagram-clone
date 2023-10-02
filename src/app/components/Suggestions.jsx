'use client'
import minifaker from "minifaker"
import "minifaker/locales/en"
import { useEffect, useState } from 'react'
import Suggestion from "./Suggestion";
export default function Suggestions() {
    const [storyUsers, setStoryUsers] = useState([]);
    useEffect(() => {
      const storyUsers = minifaker.array(5, (i) => ({
        username: minifaker.username({ locale: "en" }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      }));
      setStoryUsers(storyUsers);
    }, []);
  return (
    <div>
        <div className="flex ">
        <p className="text-gray-500 pl-10 flex-1">Suggested for you</p>
        <button className='text-gray-400 text-sm hover:cursor-pointer pt-1 pb-1 pl-4 pr-4'>See All</button>
        </div>
    {storyUsers.map((user)=>(
        <Suggestion key={user.id} username={user.username} img={user.img}/>
       ))}
    </div>
  )
}
