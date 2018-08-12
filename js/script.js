var myLibrary=["Puple","The Fisherman","This is it", "its been a long time coming"]

function Book(title,author,page, read){
    this.title=title
    this.author=author
    this.page=page
    this.read=read
    this.info=function(){
        console.log(`${title} by ${author} status: ${read}`);
    }
    }

    document.addEventListener('DOMContentLoaded',displayBooks);
    document.addEventListener('submit', addBook);
    
    function bookDelete(url){
        for(i=0; i<myLibrary.length; i++){
            if(myLibrary[i]===url){
                myLibrary.splice(i,1)
                displayBooks()
            }
        }
        
    }
   
    //display list of books nin myLibrary
    function displayBooks(){
        let books=document.querySelector('.listBooks ')
        let li= document.createElement('li')
        books.innerHTML = ""
        for(i=0; i<myLibrary.length; i++){ 
            
            li.innerHTML+=`<div class="bookItem">
                 <li>${myLibrary[i]}<button class="delete" data-name="${myLibrary[i]}"  onClick='bookDelete("${myLibrary[i]}")'   type="submit">Delete </button></li> </div>`;
            books.appendChild(li)
            


            

        }
        let deleteBook = document.querySelector('.delete')
        
    }

    
    
   
    //add book to library
    function addBook(e){
        let li= document.createElement('li')
        e.preventDefault()
        li.innerHTML=""
        var bookToAdd=document.querySelector('form');
            let addedBook=document.querySelector('input[type="text"]').value
            if(addedBook==""){
                alert("key in book you fool")
            }else{
                document.querySelector('input[type="text"]').value=""
                myLibrary.push(addedBook)
                console.log(myLibrary)
                displayBooks();
            }
           
            
            
            
        }

    
    
  
