//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let downloadimage=(url)=>{
	return new Promise((resolve,reject)=>{
	const img=new Image();
		img.src=url;
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(`Failed to load image ${url}`);
		});
}

function downloadimages(){
	const errorDiv=document.getElementById("error");
	const loading=document.getElementById("loading");
	errorDiv.innerHTML="";
	output.innerHTML="";

	loading.style.display="block";
	Promise.all(images.map(img=>downloadimage(img.url)))
	.then(images=>{
		loading.style.display="none";
		images.forEach(img=>output.appendChild(img));
	})
	.catch(error=>{
		loading.style.display="none";
		errorDiv.innerHTML=error;
	})
}
btn.addEventListener("click", downloadimages);