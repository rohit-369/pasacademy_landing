import express from 'express';
import https from 'https'; // No need to specify 'node:http' since it's a built-in module
import cors from 'cors';
import mysql from 'mysql';
import axios from 'axios';
import { log } from 'console'; // No need to specify 'node:console' since it's a built-in module

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    // Other options
}));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wordpress"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: " + err.stack);
        return;
    }
    console.log("Connected to MySQL with connection id " + con.threadId);
});

app.get('/blogs', (req, res) => {
    const query = `SELECT * FROM wp_posts WHERE post_status='publish' AND post_type='post'`;

    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

app.get('/category', (req, res) => {
    const query = `SELECT * FROM wp_terms`;
    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

app.get('/categoryList', (req, res) => {
    const query = `SELECT * FROM 'wp_posts' left join wp_term_relationships ON wp_term_relationships.object_id=wp_posts.ID left JOIN wp_terms on wp_terms.term_id=wp_term_relationships.term_taxonomy_id WHERE wp_posts.post_status='publish' AND wp_posts.post_type='post';`;
    con.query(query, (err, results) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
