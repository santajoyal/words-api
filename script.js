async function foo(){
    try {
    let res=await fetch("https://random-words-api.vercel.app/word");
    let res1=await res.json();
    console.log(res1);
    console.log(res1[0].word);
    console.log(res1[0].pronunciation);
    console.log(res1[0].definition);
    var div=document.createElement("div");
    div.setAttribute("class","main");
        div.innerHTML=`<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header"><b>Word: ${res1[0].word}</b></div>
        <div class="card-body">
        <p class="card-text"><b>Definition: </b>${res1[0].definition}</p>
        <p class="card-text"><b>Pronunciation: </b>${res1[0].pronunciation}</p>
        </div>
      </div>`;
  document.body.append(div);   
    } 
    catch (error) {
        console.log(error);
    }
}
foo();