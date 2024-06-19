const GOOGLE_API_KEY ="AIzaSyBrG-hcrsvHHFRAJgtEwBeV8Q56tm1p41I";
export const YOUTUBE_VIDEOS_API =  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
GOOGLE_API_KEY;
export const PLAYLIST ="https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=" + GOOGLE_API_KEY; 
export const VIDEO_CATEGORIES ="https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + GOOGLE_API_KEY; 