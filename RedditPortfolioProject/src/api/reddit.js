const CLIENT_ID = import.meta.env.VITE_REDDIT_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_REDDIT_CLIENT_SECRET;

async function getAccessToken() {
  try {
    const response = await fetch('/reddit/api/v1/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
      },
      body: 'grant_type=client_credentials'
    });
    
    const json = await response.json();
    return json.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

export const getSubredditPosts = async (subreddit) => {
  const token = await getAccessToken();
  const response = await fetch(`/oauth${subreddit}.json`, {  // Updated path
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
    try {
      const token = await getAccessToken();
      console.log('Got access token:', token);
  
      console.log('Making request to /oauth/subreddits/popular.json');
      const response = await fetch('/oauth/subreddits/popular.json', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text(); // Get raw response text first
      console.log('Raw response text:', text);
      
      const json = JSON.parse(text);
      console.log('Parsed JSON:', json);
      
      if (!json.data || !json.data.children) {
        throw new Error('Unexpected API response structure');
      }
      
      const mappedData = json.data.children.map((subreddit) => subreddit.data);
      console.log('Mapped subreddit data:', mappedData);
      
      return mappedData;
    } catch (error) {
      console.error('Detailed error in getSubreddits:', {
        message: error.message,
        stack: error.stack
      });
      throw error;
    }
  };

export const getPostComments = async (permalink) => {
  const token = await getAccessToken();
  const response = await fetch(`/oauth${permalink}.json`, {  // Updated path
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  return json[1].data.children.map((subreddit) => subreddit.data);
};