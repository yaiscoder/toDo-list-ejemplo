const form = document.getElementById('form');
const listPending = document.querySelector('.list-pending');
const listDone = document.querySelector('.list-done');
const listDefault = document.querySelector('.list-default');
const input = document.getElementById('txtTask');

Array.from(listDefault.children).forEach(function(li){
    li.addEventListener('click', function(){

        if(li.classList.contains('done')){
            listDone.removeChild(li);
            listDefault.append(li);
        }else{
            listDefault.removeChild(li);
            listDone.append(li);
        }
        
        li.classList.toggle('done');

    });
})

form.addEventListener('submit', function(event){
    event.preventDefault();

    const taskName = input.value;

    if(taskName.trim() == ''){
        return;
    }
    
    const task = document.createElement('li');
    task.textContent = taskName;
    input.value = '';

    listPending.prepend(task);

    task.addEventListener('click', function(){

        if(task.classList.contains('done')){
            listDone.removeChild(task);
            listPending.append(task);
        }else{
            listPending.removeChild(task);
            listDone.append(task);
        }
        
        task.classList.toggle('done');

    });

});



