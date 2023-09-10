const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// 创建MySQL连接
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // 您的MySQL用户名
    password: "yosinaga", // 您的MySQL密码
    database: "mydb" // 您的数据库名称
});

// 连接到MySQL数据库
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// 创建一个API端点来获取用户数据
app.get("/api/users", (req, res) => {
    const query = "SELECT * FROM users";

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }

        res.json(results);
    });
});

// 启动Express服务器
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
