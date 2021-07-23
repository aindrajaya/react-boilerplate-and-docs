import React, { Component } from 'react'

class ClassComponentLifecycle extends Component {
  constructor(){
    super();
    this.state = {
      // data: [{"body":"Data larik 1"}, {"body":"Data Larik 2"}]
      data : [
        {
          "userId": 2,
          "id": 11,
          "title": "et ea vero quia laudantium autem",
          "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
          "userId": 2,
          "id": 12,
          "title": "in quibusdam tempore odit est dolorem",
          "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
          "userId": 2,
          "id": 13,
          "title": "dolorum ut in voluptas mollitia et saepe quo animi",
          "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
        },
        {
          "userId": 2,
          "id": 14,
          "title": "voluptatem eligendi optio",
          "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
        },
        {
          "userId": 2,
          "id": 15,
          "title": "eveniet quod temporibus",
          "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
        }
      ]
    }
  }
  //componentDidMount
  componentDidMount(){
    this.tambahData()
    this.loadDataDariAPI()
  }

  tambahData(){
    this.setState({
      data: this.state.data.concat([{"body":"Data Larik 3"}, {"body":"Data Larik 4"}, {"body":"Data larik 5"}])
    })
  }

  //synchronous
  //get response dari api, ada lagi proses post response ke api
  loadDataDariAPI(){
    return fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res => {
      if(!res.ok) throw Error(res.statusText) //status jika data kosong
      return res.json() //data res dibaca response nya menggunakan json
    })
    .then(posts => {
      this.setState({
        data: this.state.data.concat(posts)
      })
      // console.log(this.state.data)
    })
  }

  //componentDidUpdate
  //componetWillUnmount
  render() {
    console.log(this.state.data) //akan keluar 2x ketika fase mounting
    const DataPosts = this.state.data
    return (
      <div>
        <h1>List Data:</h1>
        <ol>
          {DataPosts.map((item, idx) => (
            <li key={idx}>{item.body}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ClassComponentLifecycle