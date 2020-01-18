import * as actions from '../actions/postActions';

const initState = {
 isLoading: false, 
 isError: false, 
 data: [
   {
     id: 20,
     userName: 'Krzysztof123',
     avatar: 'data:image/jpeg;base64,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',
     title: 'Nowa wlepa na przedmieściach!',
     content: '18.01.2020',
     img: 'https://thumbs.img-sprzedajemy.pl/1000x901c/91/40/ea/naklejki-na-samochod-wlepki-na-auto-naklejki-lubelskie-lublin-455770843.jpg',
     favorited: 10,
     position: [[51.220152, 16.161984]],
     comments: [
       {
         commentId: 0,
         userName: 'Szybki002',
         comment: 'Zajefajne!',
         avatar: 'https://www.swps.pl/images/Biogramy/BIO-Krzysztof-rzenca.jpg',
       },
       {
         commentId: 1,
         userName: 'Janina88',
         comment: 'A gdzie to?',
         avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Janina_Gavankar%2C_Star_Wars_The_Last_Jedi_premiere%2C_Dec_2017_%28cropped%29.jpg',
       },
     ]
    },
    {
     id: 21,
     userName: 'Szybki002',
     avatar: 'https://www.swps.pl/images/Biogramy/BIO-Krzysztof-rzenca.jpg',
     title: 'Patrzcie co znalazłem <3',
     content: '13.01.2020',
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NZjvfEA65C1RMwNKA7yvN4G8nG2_8Lsa1gucz0-AeDuTTxkh&s',
     favorited: 21,
     position: [[51.220152, 16.161984]],
     comments: [
       {
         commentId: 2,
         userName: 'prawdziwyPolak1410',
         comment: 'Prawdziwy patriota !',
         avatar: 'https://www.odziezuliczna.pl/!data/shop/b_shop2_440.jpg',
       },
       {
         commentId: 3,
         userName: 'prawdziwyPolak1410',
         comment: 'Prawdziwy patriota !',
         avatar: 'https://www.odziezuliczna.pl/!data/shop/b_shop2_440.jpg',
       }
     ]
   },
   {
     id: 22,
     userName: 'Janina88',
     avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Janina_Gavankar%2C_Star_Wars_The_Last_Jedi_premiere%2C_Dec_2017_%28cropped%29.jpg',
     title: 'Chcecie wiedzieć gdzie to?',
     content: '13.01.2020',
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrgnEQQPMRaELYpRhFNbwYQzCguIgAgTHNTZ3iMo4wlnXCuzz&s',
     favorited: 21,
     position: [[51.220152, 16.161984]],
     comments: []
   },
   {
     id: 23,
     userName: 'smieszek1234',
     avatar: 'https://www.dorzeczy.pl/_thumb/90/21/7e7c2f25f49dbe83c8fbd7b3e468.jpeg',
     title: 'Hehehe',
     content: '13.01.2020',
     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTobo683bYS-KViG8JO4eGMGr2rYJ4ePdA7WP_3hF_G75rrwd&s',
     favorited: 21,
     position: [[51.220152, 16.161984]],
     comments: [
       {
         commentId: 4,
         userName: 'superUser',
         comment: 'Super wlepa',
         avatar: 'https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg',
       }
     ]
   },
   {
     id: 24,
     userName: 'prawdziwyPolak1410',
     avatar: 'https://www.odziezuliczna.pl/!data/shop/b_shop2_440.jpg',
     title: 'Tylko bóg może nas sądzić!',
     content: '13.01.2020',
     img: 'https://www.dokurviator.pl/32-large_default/wlepa-dokurviator-classic.jpg',
     favorited: 21,
     position: [[51.220152, 16.161984]],
     comments: [
       {
         commentId: 5,
         userName: 'Janina88',
         comment: 'Chcemy więcej <3',
         avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Janina_Gavankar%2C_Star_Wars_The_Last_Jedi_premiere%2C_Dec_2017_%28cropped%29.jpg',
       }
     ]
   },
   {
     id: 25,
     userName: 'Janina88',
     avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Janina_Gavankar%2C_Star_Wars_The_Last_Jedi_premiere%2C_Dec_2017_%28cropped%29.jpg',
     title: 'Najs wlepka znaleziona!',
     content: '13.01.2020',
     img: 'https://membranarapgra.pl/pol_ps_Naklejka-samoprzylepna-Stoprocent-3D-Essa-czarna-34109_1.jpg',
     favorited: 21,
     position: [[51.220152, 16.161984]],
     comments: [
       {
         commentId: 6,
         userName: 'Janina88',
         comment: 'Świetna ta moja wlepa',
         avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Janina_Gavankar%2C_Star_Wars_The_Last_Jedi_premiere%2C_Dec_2017_%28cropped%29.jpg',
       }
     ]
   }
 ],
 isSending: false,
 actualId: 25,
 loaded: false,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    
    case actions.GET_POSTS_REQUESTED:
      return { ...state, isLoading: true };
      
    case actions.GET_POSTS_DONE:
      return { ...state, isLoading: false, loaded: true, data: [ ...state.data, ...action.payload] };
      
    case actions.GET_POSTS_FAILED:
      return { ...state, isLoading: false, isError: true }
      
    case actions.SEND_POST_REQUESTED:
      return { ...state, isSending: true };
      
    case actions.SEND_POST_DONE:
      const post = action.res.data;
      console.log(post.post)
      return { ...state, isSending: false, data: [...state.data, post.post] };
    case actions.SEND_POST_FAILED:
      return { ...state, isSending: false, isError: true }
    
    case actions.ADD_COMMENT:
      return {
        ...state,
        data: state.data.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            comments: [...post.comments, { commentId: state.actualId + 1, userName: action.userName, comment: action.comment, avatar: action.avatar }],
            actualId: state.actualId + 1,
          }
        }
        return post
      })}
    
    default:
      return state;
  }
};

export default postReducer;
