import axios from 'axios'

const apiKey = 'aqui va una key'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// giphyApi.get('/random')
// .then(({data:response}) => {
//     console.log(response)
//     const { url } = response.data.images.original
//     console.log(url)

//     const img = document.createElement('img')
//     img.src = url
//     document.body.append(img)
// })
// .catch(err=>{
//     console.log(err)
// })

giphyApi.get('/random')
.then((response) => {

    const { data } = response.data
    const { url } = data.images.original
    console.log(url)

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

})
.catch(err=>{
    console.log(err)
})