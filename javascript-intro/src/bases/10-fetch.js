const apiKey = 'aqui va una key'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then( (response) => response.json())
.then(({data}) => {
    console.log(data)

    const { url } = data.images.original

    console.log(url)

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(function (err) {
    console.log(err)
})
