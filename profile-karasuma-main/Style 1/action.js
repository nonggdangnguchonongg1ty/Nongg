//=======================Bạn Có Thể Sửa Nếu Bạn Biết Về Code=========================

divLoader = document.querySelector("#div__loader")
divShowAvatar = document.querySelector("#div__show__avatar")
divShowAvatar.onclick = () => { closeShowAvatar() }
showAvatar = document.querySelector("#show__avatar")
divMain = document.querySelector("#div__main")
divProfile = document.querySelector("#div__profile")
document.querySelector("#avatar__border").onclick = () => { ShowAvatar() }
Avatar = document.querySelector("#avatar")
Nickname = document.querySelector("#nickname")
RealName = document.querySelector("#realName")
divLink = document.querySelectorAll(".div-link")
document.querySelector("#coder").onclick = () => {
    window.location = "https://www.facebook.com/vinhtran.karasuma.206/"
}

window.onload = () => {
    divMain.style.background = `url(${ImgLink_Background})`
    Avatar.src = ImgLink_Avatar
    showAvatar.src = ImgLink_Avatar
    Nickname.innerText = Nickname_Profile
    RealName.innerText = RealName_Profile
    for (let i = 0; i < divLink.length; i++) {
        divLink[i].onclick = () => {
            if (i == 1) {
                alert("Kết Bạn Với " + LinkInformation[i])
            } else {
                window.location = LinkInformation[i]
            }
        }
    }

    setTimeout(() => {
        divLoader.style.opacity = "0"
        divMain.style.opacity = "1"
        divMain.style.zIndex = "10"
        setTimeout(() => {
            divProfile.style.marginTop = "0px"
            divProfile.style.opacity = "1"
            divProfile.style.transition = "all 1s"
        }, 1000)
    }, 1500)

    // Chỉnh Thuộc Tính Một Số Phần
    if (screen.width <= 500) {
        divMain.style.backgroundSize = "cover"
        divMain.style.backgroundPosition = "center bottom"
    } else {
        divMain.style.backgroundSize = "cover"
        divMain.style.backgroundPosition = "left bottom"
    }
}

function ShowAvatar() {
    divShowAvatar.style.zIndex = "8"
    divShowAvatar.style.opacity = "1"
}

function closeShowAvatar() {
    divShowAvatar.style.zIndex = "0"
    divShowAvatar.style.opacity = "0"
}