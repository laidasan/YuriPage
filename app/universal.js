((obj) => {
    console.log(obj);
    this[obj.name] = obj;
    console.log(universal)
})({
    name: 'universal',
    onload: false,
})