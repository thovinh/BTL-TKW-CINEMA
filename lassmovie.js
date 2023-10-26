// video trailer
const luong = document.querySelector('.luong');
const trailer = document.querySelector('.trailer');
const close = document.querySelector('.close');
const videoPlayer = document.querySelector('video');

let isVideoPlaying = false; // Biến kiểm tra trạng thái phát video

luong.addEventListener('click', () => {
    trailer.style.display = 'block'; // Hiển thị cửa sổ video
    if (!isVideoPlaying) {
        videoPlayer.play(); // Phát video nếu chưa phát
        isVideoPlaying = true; // Cập nhật trạng thái phát video
    }
});

close.addEventListener('click', () => {
    trailer.style.display = 'none'; // Ẩn cửa sổ video
    videoPlayer.pause(); // Tạm dừng video
    videoPlayer.currentTime = 0; // Đặt thời gian video về ban đầu
    isVideoPlaying = false; // Đặt trạng thái phát về false
});

// Tắt tự động phát video khi trang web được tải
videoPlayer.autoplay = false;
const loginButton = document.getElementById("login");
const storedUsername = localStorage.getItem("username");

if (storedUsername) {
    const icon = document.createElement("i");
    icon.className = "fi fi-rr-user";
    const usernameText = document.createTextNode(storedUsername);
    loginButton.textContent = ''; 
    loginButton.appendChild(icon);
    // loginButton.appendChild(' ');
    loginButton.appendChild(usernameText); 
}

loginButton.addEventListener("click", function (){
    window.location.href = "../login/login.html";
  
});