import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          The Travel & Enjoy app is designed to revolutionize the way people explore the world by providing an all-in-one solution for discovering, planning, and enjoying travel experiences, making it the ultimate travel companion for today’s explorers. In a world where travel has become both a passion and a necessity for many, this app takes the guesswork out of planning and offers features that cater to every aspect of your journey. From the moment you decide to embark on a trip, whether it's a weekend getaway or a month-long adventure, Travel & Enjoy ensures that your experience is smooth, personalized, and packed with excitement. One of the app’s most remarkable features is its ability to offer customized itineraries based on your preferences. Gone are the days of generic travel plans that overlook your unique interests. Instead, Travel & Enjoy leverages data and sophisticated algorithms to design itineraries that cater to your likes, dislikes, and budget constraints.

             </p>
          <br />
          <p>
          For example, if you’re someone who thrives in nature, the app may recommend serene hiking trails in places like the Swiss Alps, while an art enthusiast may receive recommendations for museum tours or street art explorations in cities like Berlin. The app doesn’t just provide surface-level information; it dives deep into the nuances of your preferences, ensuring that no two itineraries are alike and that every user has a travel experience tailored specifically to them
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
