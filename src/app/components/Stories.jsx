'use client'
import minifaker from "minifaker"
import "minifaker/locales/en"
import { useEffect, useState } from 'react'
import Story from './Story'

export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([]);
    useEffect(() => {
      const storyUsers = minifaker.array(20, (i) => ({
        username: minifaker.username({ locale: "en" }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      }));
      setStoryUsers(storyUsers);
    }, []);
  return (
    <div className="flex space-x-2 m-10 overflow-x-scroll scrollbar-none sm:max-w-lg">
       {storyUsers.map((user)=>(
        <Story key={user.id} username={user.username} img={user.img}/>
       ))}
    </div>
  )
}
