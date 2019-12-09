import React, { Component } from 'react';
import Post from '../Post/Post';

class PostList extends Component {
  state = {
    postList: [
      {
        avatar:
          'data:image/jpeg;base64,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',
        name: 'Janusz12345PL',
        date: 'September 14, 2019',
        image:
          'https://f.allegroimg.com/s512/034467/d640fed2409c96b7349968632a9f/Naklejka-na-auto-Janusz-Nosacz-I-Cyk-dwojeczka',
        tags: ['tag1', 'tag2', 'tag3'],
        likes: 250,
        shares: 100,
        position: [51.21, 16.18],
      },
      {
        avatar:
          'https://d-art.ppstatic.pl/kadry/k/r/c3/1e/54b14e9ae0d73_o_full.jpg',
        name: 'Grażynka',
        date: 'November 1, 2018',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNz7NfSIXNtI-LP99oY8SsVIFcnG8kImmW2lXmoHsMN7YDxeIJ&s',
        tags: ['tag1', 'tag2', 'tag3'],
        likes: 250,
        shares: 100,
        position: [51, 16],
      },
      {
        avatar: 'https://i.ytimg.com/vi/TqgIhSl-Gs0/hqdefault.jpg',
        name: 'Seba69',
        date: 'September 14, 2019',
        image:
          'https://cdn11.bigcommerce.com/s-00a4b/images/stencil/1024x1024/products/1280/4055/4kxleuxOHQNDyYLUl8rL63kzcIoSkFWBaNiKmW_B3Pw__60454.1432060950.jpg?c=2',
        tags: ['tag1', 'tag2', 'tag3'],
        likes: 250,
        shares: 100,
        position: [51.1, 16.2],
      },
    ],
  };

  render() {
    return this.state.postList.map((postData, key) => {
      return <Post {...postData} key={key} />;
    });
  }
}

export default PostList;
