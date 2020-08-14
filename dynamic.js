//XMLHttpRequest
function jsonloading(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=()=>{
	if(xhr.readyState=="4" && xhr.status=="200") {
    callback(xhr.responseText);	
	}
}
xhr.send();
}
jsonloading("data.json",(text)=>{
	let d=JSON.parse(text);
	console.log(d);
	GDV(d.details);
	Friends(d.friends);
})
var main=document.querySelector(".main");
function GDV(react){
var p=document.createElement("img");
p.src=react.picture;
p.alt="profile-pic";
main.appendChild(p);
var n=document.createElement("h1");
n.textContent=react.name;
main.appendChild(n);
var a=document.createElement("p");
a.textContent=react.age;
a.setAttribute("id","age");
main.appendChild(a);
var h1=document.createElement("h1");
h1.textContent="Skills"
main.appendChild(h1);
h1.appendChild(document.createElement("hr"));
var ul=document.createElement("ul");
for(var i=0;i<react.skills.length;i++){
	var li=document.createElement("li");
    li.textContent=react.skills[i];
    ul.appendChild(li);
}
main.appendChild(ul);
}
function Friends(s){
var table=document.createElement("table");
var row="";
for (var i = 0;i<s.length;i++) {
    row+="<tr><td>"+s[i].name+"</td><td>"+s[i].age+"</td><td>"+s[i].EducationalQualification+"</td></tr>";
}
table.innerHTML=row;
main.appendChild(table);
}