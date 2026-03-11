import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  }, [feed]);

  return feed && (
  <div className="flex flex-wrap justify-center gap-6 my-10">
    {feed.map((user) => (
      <UserCard key={user._id} user={user} />
    ))}
  </div>
);

};

export default Feed;