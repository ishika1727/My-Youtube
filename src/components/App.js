import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDx09aTNhbNXzZedFsBOw6OCTiRPNJQxKw',
        q: term
      }
    });
    this.setState({ videos: res.data.items });
  };
 
  // onTermSubmit = async (term) => {
  //   const res=await youtube.get('/search',{
  //     params:{
  //       q: term 
  //     }
  //   });
  //   console.log(res);
  // };

  onVideoSelect = (video) => {
    
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}
export default App;