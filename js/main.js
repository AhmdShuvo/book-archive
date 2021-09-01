const ViewData=()=>{
    const searcField=document.getElementById('search');
    const searchText=searcField.value;
      
    // const url2= `http://openlibrary.org/search.json?q=${searchText}`;

    const url1= `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url1).then(res=>res.json())
    .then(data=>{
                const totalResults=document.getElementById('totalresults').innerText=`shwowing 10 of  ${data.docs.length} results `
        loadData(data.docs.slice(0,10))
    });
          
   
}
const loadData= (books=>{

    const  searchResult=document.getElementById('results');
    searchResult.textContent='';
   
    const section=document.getElementById('results');
   
   
   
    books.forEach(book=>{
        // console.log(book);

   
        const div=document.createElement('div');
         div.innerHTML=`
    

     <div class="col w-40%">
     <div class="card">
       <img src=" ${`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}" class="card-img-top border border-info rounded-3 p-2" alt="..." width="20%">
       <div class="card-body">
         <h5 class="card-title fs-1 text-danger text-center">${book.title}</h5>
         <h5 class="card-title fs-1 text-danger text-center"> Author name : ${book.author_name}</h5>
         <p class="card-text"></p>
       </div>
     </div>
   </div>

    `;


    section.appendChild(div);
    })

   
})