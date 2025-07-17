AlbumListProject = {
    projectImg: [
        "https://i.postimg.cc/RVVqG62w/profile-1-min.png",
        "https://i.postimg.cc/fWvJxjqw/profile-2-min.png",
        "https://i.postimg.cc/RZ2FMPhT/profile-3-min.png",
        "https://i.postimg.cc/T1Q1ff5y/profile-4-min.png"
    ],
    projectGif: [
        "https://i.postimg.cc/rmNFNMJh/ezgif-profile-1.webp",
        "https://i.postimg.cc/TPmPhrWv/ezgif-profile-2.webp",
        "https://i.postimg.cc/mDsg9tQz/ezgif-profile-3.webp",
        "https://i.postimg.cc/HsZnNWCR/ezgif-profile-4.webp"
    ]
}

window.onload = () => {
    console.log("API FILE")
}

previewEle = document.querySelectorAll(".preview")

if (screen.width > 500 && document.querySelector("body").clientWidth > 500) {
    document.querySelector(".tips").innerText = "(Di chuột vào các mẫu để xem trước dự án và link source code bên dưới)"
} else {
    document.querySelector(".tips").innerText = "(Link source code bên dưới)"
}
for (let i = 0; i < previewEle.length; i++) {
    if (screen.width > 500 && document.querySelector("body").clientWidth > 500) {
        previewEle[i].onmouseenter = () => { previewEle[i].src = AlbumListProject["projectGif"][i] }
        previewEle[i].onmouseout = () => { previewEle[i].src = AlbumListProject["projectImg"][i] }
    } else {
        previewEle[i].src = AlbumListProject["projectGif"][i]
    }
}