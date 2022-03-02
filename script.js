function show(){
  const data = document.getElementById("input").value;
  const arr1=[]
  const arr2=[]
  const tampil =document.getElementById("result")
  for(let i=0;i<data.length;i++){
    if(!isNaN(parseInt(data[i]))){
      arr2.push(data[i])
    }else{
      arr1.push(data[i])
    }
  }
  const string = arr1.reverse().join('')
  const number = arr2.join('')

  tampil.innerHTML = string+number
}
