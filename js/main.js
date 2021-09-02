//  Onclcick Function ///

const ViewData=()=>{
    // Spinner Toggle //
    toggoleLoader('block')

    // get seach value //
    const searcField=document.getElementById('search');
    const searchText=searcField.value;

    // remove Previous data 
    searcField.value='';
    const results=document.getElementById('results').textContent='';
    const notMatched=document.getElementById('not-matched').textContent='';


   if(searchText===''){
    const totalResults=document.getElementById('totalresults').textContent='';
    const ErrorField=document.getElementById('Error').innerText=`Search Box Can not Be empty. Please Write Something to Search`;
   }
   else{

    //  remove filed value//
    const ErrorField=document.getElementById('Error').textContent='';

    // fetch Urls //
    const url= `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url).then(res=>res.json())
    .then(data=>{ 
      
        // slice array to show 10 results //   
        loadData(data.docs.slice(0,10))
        // check is result matched or not //
       if(data.docs.length===0){

        //    remove  result section //
        const totalResults=document.getElementById('totalresults').textContent='';
        // set text error for Not matching results //
        const notMatched=document.getElementById('not-matched').innerText="Search Results did not matched"
       }
       else{
        const totalResults=document.getElementById('totalresults').
        //    showimg 10 results //
        innerText=`shwowing ${data.docs.slice(0,10).length} of  ${data.docs.length} results `   
       }
    });
   }
}
   const loadData= (books=>{
    books.forEach(book=>{
        console.log(book);

            //  check for Not match search //
        if(!book){
            
            //   show results didnot matched //
            const Noresult=document.getElementById('not-matched').innerText="Not MAtched"
        }

        // check for the searchtext is Exists ///
        else{
            const section=document.getElementById('results');
   
        const div=document.createElement('div');
    div.innerHTML=`
    <div class="card mb-3 text-dark p-3">
  <img src="${`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}" class="card-img-top img-fluid p-2" alt="...">
  <div class="card-body h-full w-auto">
  <h5 class="card-title fs-2  text-center"> ${book.title}</h5>
         <h5 class="card-title fs-3 text-center"> Author name : ${book.author_name}</h5>
         <h5 class="card-title fs-5 text-center">First released : ${book.first_publish_year}</h5>
         <h5 class="card-title fs-5 text-center">publisher : ${book.publisher[0]}</h5>
   
  </div>
</div>
    `;
        //  append search result //
    section.appendChild(div);
        }
    }) 
    //  Toggle Display None ///
    toggoleLoader('none')

   
})       

    //   LODER toggle ///
    const toggoleLoader=(displayProperty)=>{
        const toggle=document.getElementById('loader').style.display=displayProperty;
    }