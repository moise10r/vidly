 import genre from './genre'
export const movies=[
{
 _id:"6035a4e105c319a9880as252b1n",

title:"Terminal",
genre:{     
    _id:"6035a4e105319a9880a52b16",
    name:"Action"
    },
numberInstock:7,
dailyRentalRate:2.5,
published:"24 février 2021",
like:true
},
{
    _id:"6035a4e105319a9c8w80as252b1n",
   
   title:"The Avengers",
   genre:{     
    _id:"6035a4e105319a9880a52b16",
    name:"Action"
       },
   numberInstock:3,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   {
    _id:"6035a4e105319a98s80as252b1n",
   
   title:"The sixth sense",
   genre:{     
    _id:"6035a4e105319a9d880a52d16",
    name:"Cartoon"
       },
   numberInstock:6,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   
   {
    _id:"6035a4e105319a98s80was252b1n",
   
   title:"Wedding crash",
   genre:{     
    _id:"6035a4e105319a98s80a5d2mi16",
    name:"comedy"
       },
   numberInstock:2,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   {
    _id:"6035a4e105319a98s80swas252b1n",
   
   title:"Gone Girl",
   genre:{     
    _id:"6035a4e10fd5319a98s80sa5d2mi16",
    name:"Thriller"
       },
   numberInstock:4,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   {
    _id:"6035a4e105s319a98s80swas252b1n",
   
   title:"Gone Girl for me",
   genre:{     
    _id:"6035a4e10fd5319a98s80sa5d2mi16",
    name:"Thriller"
       },
   numberInstock:9,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   {
    _id:"6035a4e105319a9xs8s80swas252b1n",
   
   title:"Super hero",
   genre:{     
    _id:"6035a4e105319a9880a52b16",
    name:"Action"  
       },
   numberInstock:2,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   {
    _id:"6035wwa4e105319a9xs8s80swas252b1n",
   
   title:"Uncle dree",
   genre:{     
    _id:"6035a4e105319a98s80a5d2mi16",
    name:"comedy"
       },
   numberInstock:6,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   {
    _id:"60ss35wwa4e105319a9xs8s80swas252b1n",
   
   title:"America 2",
   genre:{     
    _id:"6035a4e10fd5319a98s80sa5d2mi16",
    name:"Thriller"
       },
   numberInstock:7,
   dailyRentalRate:2.5,
   published:"24 février 2021",
   like:true
   },
   
   
   

]
export  default function saveMovie(movie){
    const newMovieInDB = movies.find(m=>m._id === movie._id) || {}
    newMovieInDB.title = movie.title
    newMovieInDB.numberInstock = movie.numberInstock
    newMovieInDB.dailyRentalRate = movie.dailyRentalRate
    newMovieInDB.genre = genre.find(g=>g._id === movie.genreId)
    if(!newMovieInDB._id){
        newMovieInDB._id = Date.now().toString()
        movies.push(newMovieInDB)
        console.log(movies);
        console.log("after");
    }
    return newMovieInDB
   }

// module.exports=movies