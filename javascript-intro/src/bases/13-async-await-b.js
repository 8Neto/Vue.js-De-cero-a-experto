import axios from 'axios'

const apiKey = 'aqui va una key'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

const getImage = async () => {
    try {
        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log('Error en la peticion', error)
        throw error
    }
}

getImage()