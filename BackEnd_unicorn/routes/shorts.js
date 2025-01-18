const { configDotenv } = require("dotenv");
const express = require("express");
const router=express.Router();
const axios = require("axios");
// Your YouTube API integration
router.get("/", async (req, res) => {
    try {
      const API_KEY = process.env.YOUTUBE_API_KEY;
      const CHANNEL_ID = process.env.CHANNEL_ID;
  
      if (!API_KEY) {
        return res.status(500).json({ error: "YouTube API Key is missing" });
      }
  
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            channelId: CHANNEL_ID,
            maxResults: 20,
            type: "video",
            key: API_KEY,
          },
        }
      );
  
      const shorts = response.data.items.map((item) => ({
        id: item.id.videoId,
        videoId: item.id.videoId,
        title: item.snippet.title,
      }));
  
      res.json(shorts);
    } catch (error) {
      console.error("YouTube API Error:", error.response?.data || error.message);
      res.status(500).json({ error: "Error fetching shorts from YouTube API" });
    }
  });


  module.exports=router;