import Post from "./Post";
import Card from "./Card.jsx";
import Widgets from "./Widgets";
import InputSection from "./InputSection";
import { UserAuth } from "../context/AuthContext";
import camera from "../assets/camera.png";
import image from "../assets/image.png";
import land from "../assets/land.png";
import { useEffect, useState } from "react";

function Feed() {
  const [usersData, setUsersData] = useState([]);
  const { user, getUsers } = UserAuth();

  const fetchUsersData = async () => {
    const data = await getUsers();
    setUsersData(data);
    console.log(data, "dta of fetched users");
  };

  useEffect(() => {
    if (user) {
      fetchUsersData();
    }
    // console.log(user);
  }, [user]);

  return (
    <>
      <div className="flex gap-[10px] pt-3">
        <div className="flex-none">
          <Card
            className="sticky"
            bg_image={land}
            profile={camera}
            name={user.name}
            title="Full Stack Developer"
          />
        </div>

        <div className="flex-1">
          <InputSection />
          {usersData.map((record, index) => (
            <Post
              key={index}
              avatar={camera}
              name={user ? user.name : "Anonymous"}
              skill="Web Developer,  React Developer"
              time="3 h"
              status="Anyone"
              description={record.description}
              image={image}
              imgDesc="Linked-In: Image of linked-in main page of feed section that shows the total layout of linked-in"
              link="www.google.com"
            />
          ))}
        </div>
        <div className="flex-none sticky top-0 h-max hidden border-[1px] border-gray md:block md:w-[160px] lg:w-[250px] rounded-md overflow-hidden ">
          <Widgets />
        </div>
      </div>
    </>
  );
}
export default Feed;
