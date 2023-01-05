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

var timer;
var count = 0;
function lastEditedInSecondAgo(){
    count = 0;
    clearInterval(timer)
    timer = setInterval(() => {
        count++;
        console.log(count);
    }, 2000);
}

    function createPost(post){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                posts.push({...post,createdAt: new Date().getTime()});
               //callback();

                const error = true;
                if(!error){
                    resolve();
                }
                else
                {
                    reject('error :something went wrong');
                }

            }, 2000)

        })
    }
    createPost( {title: 'post three', body: 'this is post three'}).then(getPosts).catch(err => console.log(err))

    function DeletePost(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(posts.length>0){
                    const lastelement = posts.pop();
                    resolve(lastelement)
                }
                else{
                    reject('array is empty now')
                }
            }, 5000)
        })
    }





    DeletePost()
    .then((deleteElement) => {
        console.log(`${deleteElement}`)
              getPosts()
              DeletePost().then(() =>{
                getPosts()
                DeletePost().then(() =>{
                   getPosts()
                    DeletePost().then(() =>{}) 
                   .catch((err)=>{
                    console.log('inside catch block',err)
                   })
                }).catch((err) => {})
            }).catch((err) => {})
        })

.catch(err => console.log(err))

