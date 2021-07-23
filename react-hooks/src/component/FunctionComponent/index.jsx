import React, { useState, useEffect } from 'react'
import { Button } from '../ButtonComponent'
import axios from 'axios'

export const FunctionComponent = () => {
  const [nama, setNama] = useState("default name")
  /**
   * state = this.state
   * setState() = this.setState()
   * 
   * initialState
   * this.state = {
   *   initialState = 0;
   * }
   */
  const changeName = () => {
    setNama("FE kelas Siang")
  }

  return (
    <div>
      <h1>{nama}</h1>
      <Button title={"ubah nama"} action={changeName}/>
    </div>
  )
}


//fungsi untuk fetch API
export const GetDataFromAPI = () => {
  //deklarasi variable
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([])
  const [movie, setMovie] = useState([]);

  //langsung DidMount
  useEffect(() => {
    getMovieData("http://www.omdbapi.com/?i=tt3896198&apikey=de2c8530") //=> keluarnya 1 data
    getDataPosts("http://jsonplaceholder.typicode.com/posts") // => di filter 10posts
    getDataNews("https://newsapi.org/v2/everything?q=Apple&from=2021-07-15&sortBy=popularity&apiKey=ee878d000ad54d149f46d3ee11ea392c") // => di filter 5 news
  }, [])


  //asynchronous tidak urut
  const getDataNews = async (url) => {
    try {
      const a = await axios.get(url); //untuk nembak ke url nya, terus get response disimpan dalam variable res
      const dataAPI = await a.data; //hasil dari res di convert menjadi data lalu disimpan sebagai variable dataAPI
      // const newsArticle = await dataAPI.articles
      // setUsers(dataAPI)
      setNews(dataAPI.articles) //init setState
    } catch (error) {
      console.log(error) //error handling akan muncul ketika data yg diakses tidak sesuai
    }
  }
  console.log(news)

  //ubah ke asynchronous getDataPosts
  const getDataPosts = async (url) => {
    try {
      const a = await axios.get(url); //untuk nembak ke url nya, terus get response disimpan dalam variable res
      const dataAPI = await a.data; //hasil dari res di convert menjadi data lalu disimpan sebagai variable dataAPI
      // const newsArticle = await dataAPI.articles
      // setUsers(dataAPI)
      setPosts(dataAPI) //init setState
    } catch (error) {
      console.log(error) //error handling akan muncul ketika data yg diakses tidak sesuai
    }
  }
  // console.log(posts)

  const getMovieData = async (url) => {
    try {
      const a = await axios.get(url); //untuk nembak ke url nya, terus get response disimpan dalam variable res
      const dataAPI = await a.data; //hasil dari res di convert menjadi data lalu disimpan sebagai variable dataAPI
      // const newsArticle = await dataAPI.articles
      // setUsers(dataAPI)
      setMovie(dataAPI) //init setState
    } catch (error) {
      console.log(error) //error handling akan muncul ketika data yg diakses tidak sesuai
    }
  }

  
  return (
    <div>
      <h1>List Data:</h1>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* Mapping dan Insert to Card => News */}
              {news.filter((item, index) => index < 3)
                .map(a => (
                  // <li key={index}>
                  <div className="col">
                    <div className="card" style={{"width": "18rem"}}>
                        <img src={a.urlToImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{a.title}</h5>
                          <p className="card-text">{a.description}</p>
                          <a href={a.url} target="_blank" rel="noopener noreferrer"> Get Link</a>
                        </div>
                      </div>
                  </div>
                  // </li>
                ))}

              {/* Mapping dan Insert to Card => Posts */}
              {posts.filter((item, index) => index < 3)
                .map(a => (
                  // <li key={index}>
                  <div className="col">
                    <div className="card" style={{"width": "18rem"}}>
                        {/* <img src={a.} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                          <h5 className="card-title">{a.title}</h5>
                          <p className="card-text">{a.body}</p>
                          {/* <a href={a.url} target="_blank" rel="noopener noreferrer"> Get Link</a> */}
                        </div>
                      </div>
                  </div>
                  // </li>
                ))}

              {/* Insert to Card => Movie */}
              <div className="col">
                <div className="card" style={{"width": "18rem"}}>
                    <img src={movie.Poster} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{movie.Title}</h5>
                      <p className="card-text">{movie.Plot}</p>
                      {/* <a href={a.url} target="_blank" rel="noopener noreferrer"> Get Link</a> */}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
          
        
    </div>
  )
}



