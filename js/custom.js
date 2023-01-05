function prep(){
    document.getElementById("imageid").style.display = 'none';
    document.getElementById("videoid").style.display = 'none';
}

document.getElementById('addPhotosInput').onchange = e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    if(e.target.files[0].type.includes("image")){
        document.getElementById("imageid").src = url;
        document.getElementById("imageid").style.display = 'block';
    }else{
        document.getElementById("videoid").src = url;
        document.getElementById("videoid").style.display = 'block';
    }
};
