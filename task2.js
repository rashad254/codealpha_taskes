let taskdown = 'down';
let nametask = document.querySelector('.name')
let list = document.querySelector('.checked')
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function down(dd) {
    if(taskdown==='down'){
        dd.innerText='text ↑'
        taskdown ='up'
        list.style.height='100px' 
    }else{
        dd.innerText='text ↓'
        taskdown ='down'
        list.style.height='0' 
    }
}
if(localStorage.data != undefined){
    data = JSON.parse(localStorage.data) 
}else{
    data = [];
}
console.log(data)
function showdata() {
    let first = [];
    let second = [];
    let third = [];
    data.forEach(e => {
            if(e.priority=='hard'){
                first.push(e)
            }else if(e.priority=='medium'){
                second.push(e)
            }else{
                third.push(e)
            }
        });
    let tabel =''
    first.forEach(e => {
                tabel +=`
                <tr>
                    <td>${e.name}</td>
                    <td>${e.priority}</td>
                    <button onclick="delet(this.id)" id=${e.id} > delete </button>
                </tr>
                `
            });
            second.forEach(e => {
                tabel +=`
                <tr>
                    <td>${e.name}</td>
                    <td>${e.priority}</td>
                    <button onclick="delet(this.id)" id=${e.id} > delete </button>
                </tr>
                `
            });
            third.forEach(e => {
                tabel +=`
                <tr>
                    <td>${e.name}</td>
                    <td>${e.priority}</td>
                    <button onclick="delet(this.id)" id=${e.id} > delete </button>
                </tr>
                `
            });
    
    document.getElementById('tbody').innerHTML=tabel
}
showdata()



function submit() {
    num=data.length
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach(element => {
        if(element.checked == true) return check = element.id; 
    });
    let newdata={
        id:num,
        name:nametask.value,
        priority:check
    }
    data.push(newdata);
    localStorage.setItem('data',JSON.stringify(data));
    nametask.value='';
    showdata()
}

// // newproject
// function showdata() {
//     let table =''
//     first.forEach(e => {
//         table +=`
//         <tr>
//             <td>${e.name}</td>
//             <td>${e.priority}</td>
//         </tr>
//         `
//     });
//     second.forEach(e => {
//         table +=`
//         <tr>
//             <td>${e.name}</td>
//             <td>${e.priority}</td>
//         </tr>
//         `
//     });
//     third.forEach(e => {
//         table +=`
//         <tr>
//             <td>${e.name}</td>
//             <td>${e.priority}</td>
//         </tr>
//         `
//     });
//     document.getElementById('tbody').innerHTML=table
// }

function delet(id){
    data.splice(id,1)
    localStorage.setItem('data',JSON.stringify(data));
    showdata()
}