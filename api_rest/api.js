///https://covid-api.mmediagroup.fr/v1/cases?country=Colombia
///https://github.com/M-Media-Group/Covid-19-API
import fetch from 'node-fetch';
const URL= 'https://www.breakingbadapi.com/api/characters'
fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec= object.values(data);
    vec.forEach(element=>{
        console.log(element);
    }
    );
})

async function loader(){
    const res=await fetch(URL);
    const data=await res.json();
    console.log('......')
    console.log(data)
}
loader()
for (let i = 0; i < vec.length; i++) {
    for (let j = 0; j < vec[3].length; j++) {
        console.log(vec[3][j].name);
        
    }
    
}
