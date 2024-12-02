import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Components/Pages/Home/Home.jsx";
import SinglePost from "../Components/Pages/SinglePost/SinglePost.jsx";
import Writer from "../Components/Pages/Writer/Writer.jsx";
import Profile from "../Components/Pages/Profile/Profile.jsx";
import MarkedPost from "../Components/Share/ProfileUtils/MarkedPost.jsx";
import SendPost from "../Components/Share/ProfileUtils/SendPost.jsx";
import PostFrom from "../Components/Share/ProfileUtils/PostFrom.jsx";
import VideoFrom from "../Components/Share/ProfileUtils/VideoFrom.jsx";
import Posts from "../Components/Share/ProfileUtils/Posts.jsx";
import EditProfile from "../Components/Pages/Profile/EditProfile.jsx";
import Category from "../Components/Pages/Category/Category.jsx";
import AboutUs from "../Components/Pages/AboutUs/AboutUs.jsx";
import ContactUs from "../Components/Pages/ContactUs/ContactUs.jsx";
import ErrorPage from "../Components/Pages/Error/ErrorPage.jsx";


export const router = createBrowserRouter([
    
    {
      path: "/",
      element:<App />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/news/details',
          element:<SinglePost/>
        },
        {
          path:'/writer',
          element:<Writer/>
        },
        {
          path:'/profile',
          element:<Profile/>,
          children:[
            {
              path:'/profile',
              element: <MarkedPost/>
            },
            {
              path:'/profile/send-post',
              element: <SendPost/>,
              children:[
                {
                  path:'/profile/send-post',
                  element: <PostFrom/>
                },
                {
                  path:'/profile/send-post/send-video',
                  element: <VideoFrom/>
                }
              ]
            },
            {
              path:'/profile/posts',
              element:<Posts/>
            }
          ]
        },
        {
          path: '/edit-profile',
          element:<EditProfile/>
        },
        {
          path: '/category',
          element:<Category/>
        },
        {
          path: '/about-us',
          element:<AboutUs/>
        },
        {
          path: '/contact-us',
          element:<ContactUs/>
        },
        {
          path:'*',
          element: <ErrorPage/>
        }
      ]
    }
    
  ]);
  