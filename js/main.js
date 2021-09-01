const ViewData=()=>{
    const searcField=document.getElementById('search');
    const searchText=searcField.value;
    searcField.value='';
    const results=document.getElementById('results').textContent='';
    const notMatched=document.getElementById('not-matched').textContent='';
   if(searchText===''){
    const totalResults=document.getElementById('totalresults').textContent='';
    const ErrorField=document.getElementById('Error').innerText=`Search Box Can not Be empty. Please Write Something to Search`;
   }
   else{
    const ErrorField=document.getElementById('Error').textContent='';
    const url1= `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url1).then(res=>res.json())
    .then(data=>{    
        loadData(data.docs.slice(0,4))
       if(data.docs.length===0){
        const notMatched=document.getElementById('not-matched').innerText="Search Results did not matched"
       }
       else{
        const totalResults=document.getElementById('totalresults').innerText=`shwowing ${data.docs.slice(0,4).length} of  ${data.docs.length} results `   
       }
    });
   }
}
   const loadData= (books=>{
    books.forEach(book=>{
        if(!book){
            console.log('Eror');

            const Noresult=document.getElementById('not-matched').innerText="Not MAtched"
        }
        else{
            const section=document.getElementById('results');
   
        const div=document.createElement('div');
    div.innerHTML=`
    <div class="card mb-3 text-dark">
  <img src="${`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title fs-1  text-center">${book.title}</h5>
         <h5 class="card-title fs-3 text-center"> Author name : ${book.author_name}</h5>
         <h5 class="card-title fs-3 text-center">First released : ${book.publish_date[0]}</h5>
         <h5 class="card-title fs-3 text-center">publisher : ${book.publisher[0]}</h5>
   
  </div>
</div>
    `;

    section.appendChild(div);
        }
    })

   
})
