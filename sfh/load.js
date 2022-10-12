function create_img(link, caption) {
    let img = document.createElement('img');
    let d1 = document.createElement("h2");
    let dicription = document.createTextNode(caption);
    d1.appendChild(dicription);
    img.src = link;
    document.getElementById('imgs').appendChild(img);
    document.getElementById('imgs').appendChild(d1);
}
create_img("images/daa.jpg", "кадр лета")
create_img("images/collage1.png", "Коллаж 'Прощай'")
create_img("images/fdwt.png", "Собака в тунеле")
create_img("images/nywc.png", "a drop of water on my camera on a rainy day 'https://www.shadertoy.com/view/NtVfDz'")