var myLibrary=["Task1","Task2","Task3"]

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
                if (myLibrary.length==0){
                    let empty= document.querySelector('.empty')
                    empty.innerHTML="<h6 class='center teal-text'>You have no task today...Enjoy your day</h6>"
                }
            }
        }
        
    }
   
    //display list of books nin myLibrary
    function displayBooks(){
        let books=document.querySelector('.listBooks ')
        let li= document.createElement('li')
        books.innerHTML = ""
        for(i=0; i<myLibrary.length; i++){ 
            
            li.innerHTML+=`<div class="bookItem card-panel">
                 <li>${myLibrary[i]}<button class="btn delete" data-name="${myLibrary[i]}"  onClick='bookDelete("${myLibrary[i]}")'   type="submit"><i class="material-icons" >delete</i></button></li> </div>`;
            books.appendChild(li)
            


            

        }
        let deleteBook = document.querySelector('.delete')
        
    }

    
    
   
    //add book to library
    function addBook(e){
        let li= document.createElement('li')
        let error=document.querySelector('.error')
        e.preventDefault()
        li.innerHTML=""
        var bookToAdd=document.querySelector('form');
            let addedBook=document.querySelector('input[type="text"]').value
            if(addedBook==""){
                error.style.display="block"
            }else{
                error.style.display="none"
                document.querySelector('input[type="text"]').value=""
                myLibrary.push(addedBook)
                console.log(myLibrary)
                displayBooks();
            }
           
            
            
            
        }

    
    
  
