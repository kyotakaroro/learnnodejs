document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("user-list");

    // 使用Fetch API从服务器获取用户数据
    fetch("/api/users")
        .then((response) => response.json())
        .then((data) => {
            // 处理从服务器返回的用户数据
            data.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = `ID: ${user.id}, Name: ${user.name}`;
                userList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);
        });
});
