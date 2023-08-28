
// import './cards.scss'

// import React from 'react';
// // import Image from 'next/image';
// import { useEffect, useState } from 'react';
// // import Shop from '@/app/Shop/page';


// export const Cards = () => {
//   const [data, setData] = useState([]);

//   const [caunt, setCaunt] = useState([])

//   const onClick = () => {
//     setCaunt(Shop)
//   }

//   async function getCards() {
//     let responce = await fetch('https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts');
//     let data = await responce.json();

//     data.pop()
//     data.pop()

//     if (data.length) setData(data);
//   }

//   useEffect(() => {
//     if (!data.length) getCards();
//   }, [data]);

//   console.log(data);
//   return (
//     <main>
//       <div>
//         <div className="cards_div">
//           {data.map((item) => (
//             <div className="home_cards" key={item.id}>
              
//               <img className='card-img' src={item.img} width='200' height='300' />

//               <p className='cards_category'>{item.category}</p>

//               <p className='cards_p'>{item.title}</p>
//               {/* <span className='cards_price'>{item.price}</span> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Cards

import './cards.scss'

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import { NavLink } from 'react-router-dom';

const Cards = () => {

  const [cart, setCart] = useState([])


  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const urlApi = 'https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts';

  const fetchPosts = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setAllPosts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPaginatedPosts = async (url, page) => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}?_page=${page}`);
      setPosts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  };

  let limit = 20;
  let numOfPages = Math.ceil(allPosts.length / limit);
  let items = [];
  for (let i = 1; i <= numOfPages; i++) {
    items.push(
      // <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
        // {i}
      // </Pagination.Item>
    );
  }

  useEffect(() => {
    fetchPosts(urlApi);
  }, [urlApi]);

  useEffect(() => {
    fetchPaginatedPosts(urlApi, page);
  }, [urlApi, page]);

  posts.pop()
  posts.pop()

  const GlobalState = () => {
    console.log(posts.id);
    const cart = posts.id  
  }

  useEffect(() => {
    localStorage.setItem("card" , JSON.stringify(posts.id))
  })



  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      {posts.length > 0 ? (
        <>
          {/* <button>cart({cart.length})</button> */}
          <div className='cards_div'>
            {posts.map((post, img , category) => (
              <NavLink  onClick={() => GlobalState(posts)}  style={{textDecoration: 'none', color: 'black'}} className={'home_cards'} key={post.id}  to={'/magazine'}>
                
                <img className='card-img ' src={post.img} alt="..." />
                <p className='cards_category'>{post.category}</p>
                <p className='cards_p'>{post.title}</p>
              </NavLink>
            ))}
          </div>
          <Pagination>{items}</Pagination>
        </>
      ) : null}
      {error ? <h3>{error}</h3> : null}
    </div>
  );
};

export default Cards;
