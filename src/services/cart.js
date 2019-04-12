const getData = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(localStorage.getItem('addedCartItems'))
        if (data !== null) {
            resolve(data)
        } else {
            resolve(null)
        }
    })

}

const getViewItems = () => {
    return new Promise((resolve, reject) => {
        const data = JSON.parse(localStorage.getItem('view'))
        if (data !== null) {
            resolve(data)
        } else {
            resolve(null)
        }
    })

}


const saveData = (key, value) => {
    return new Promise((resolve, reject) => {
        localStorage.setItem(key, JSON.stringify(value))
        console.log('data saved')
        resolve('saved')
    })
}


export default { getData, saveData, getViewItems }
