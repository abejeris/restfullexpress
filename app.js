const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

const students = [
	{ id: "1", name: "Jonas", lastmane: "Jonaitis" },
	{ id: "2", name: "Petras", lastmane: "Petraitis" },
];

app.get("/students", (req, res) => {
	res.send(students);
});

app.get("/students/:studentid", (req, res) => {
	res.send(students.find((s) => s.id === req.params.studentid));
});

app.post("/students", (req, res) => {
	students.push(req.body);
	res.send(`${req.body.id}-as studentas pridetas`);
});

const users = ["Alex", "Rose", "Megan", "Bob"];

app.get("/api/users", (req, res) => {
	res.send(users);
});

app.get("/api/users/:firstLetter", (req, res) => {
	const results = users.filter((user) =>
		user.startsWith(req.params.firstLetter)
	);
	res.send(results);
});

app.post("/api/users", (req, res) => {
	users.push(req.body.name);
	res.send(`${req.body.name} name was added`);
});

app.listen(PORT, () => console.log(`service is runing on port: ${PORT}`));
