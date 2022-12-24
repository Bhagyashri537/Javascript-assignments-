const posts = [

    {title: 'post one', body: 'this is post one', createdAt: new Date().getTime()},
    {title: 'post two', body: 'this is post two', createdAt: new Date().getTime()}
    
];
let intervalId = 0;

function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        
       let output = '';
       for(let i = 0; i<posts.length; i++) {
        output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000}second ago</li>`
       }
      console.log('timer running id = ',intervalId)
       document.body.innerHTML = output;
    }, 1000);
}
    function createPost(post, callback){
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            callback();
        }, 2000)
    }

    function create4thPost(post, callback){
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            callback();
        }, 4000)
    }

    getPosts()

    createPost( {title: 'post three', body: 'this is post three'}, getPosts)
    

    create4thPost( {title: 'post four', body: 'this is post four'}, getPosts)

    var timer;
    var count = 0;
    function lastEditedInSecondAgo(){
        count = 0;
        clearInterval(timer)
        timer = setInterval(() => {
            count++;
            console.log(count);
        }, 5000);
    }