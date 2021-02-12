const spinner = document.getElementById('spinner-box')
const data = document.getElementById('data-box')


$.ajax({
    type: 'GET',
    url: '/posts-jsonn/',
    success: function (response) {
        setTimeout(function () {
            spinner.classList.add('not-visible')
            for (let i = 0; i < response.length; i++) {
                data.innerHTML += `<h3>${response[i].title}</h3><p>${response[i].body}</p>`
            }
        }, 1000)

    },
    error: function (err) {
        setTimeout(function () {
            spinner.classList.add('not-visible')
            data.innerHTML='<h5>failed to load data</h5>'
        }, 1000)
    }
})