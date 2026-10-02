const express = require('express');   // 1. charger la bibliothèque Express
const app = express();                // 2. créer l'application : c'est notre serveur
const PORT = 3000;
app.use(express.json());   // lit le corps JSON et le range dans req.body
// 3. une route : quand un client demande GET /, Express exécute cette fonction
app.get('/', (req, res) => {
  res.json({ message: "Bonjour, je suis l'API du blog" });
});
// 4. démarrer le serveur : il attend les requêtes sur le port 3000
const articles = [
  { id: 1, title: 'Bienvenue sur le blog', author: 'Admin' },
  { id: 2, title: 'Mon premier serveur Express', author: 'Aya' },
  { id: 3, title: 'Tester une API avec Postman', author: 'Aya' }
];

// GET /api/articles            -> tous les articles
// GET /api/articles?author=Aya -> seulement ceux d'Aya
app.get('/api/articles', (req, res) => {
  const { author } = req.query;
  let result = articles;
  if (author) {
    result = articles.filter(article => article.author === author);
  }

  res.json({ total: result.length, articles: result });
});
app.get('/api/articles/:id', (req, res) => {
  const id = Number(req.params.id);          // "2" -> 2
  const article = articles.find(a => a.id === id);

  if (!article) {
    return res.status(404).json({ error: `Article ${id} introuvable` });
  }
  res.json(article);
});
let nextId = 4; 
app.post('/api/articles', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    const newArticle = { id: nextId++, title, author };
    articles.push(newArticle);
    res.status(201).json({message : 'article created', article: newArticle});
  });

//Exercice 1 : 

// when someone goes to http://localhost:3000/about, the server should respond with a JSON object containing information about the application, the app name, student name,  version.
app.get('/about', (req, res) => {
  res.json({
    app: "API du blog",
    student: "Takwa Bennjima",
    version: "1.0.0"
  });
});
// users 
const users = [
  { id: 1, name: 'Aya', email: 'aya@example.com' },
  { id: 2, name: 'Karim', email: 'karim@example.com' },
  { id: 3, name: 'Sara', email: 'sara@example.com' }
];
// users request 
app.get('/api/users', (req, res) => {
  res.json(users);
});

//  GET /api/users/:id 
app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);     // convert the id from string to number      
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: `Utilisateur ${id} no existant` });
  }
  res.json(user);
});

//  POST /contact 
app.post('/contact', (req, res) => {
  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }
  res.status(200).json({ message: ' your message has been received' });
});

app.get('/api/users', (req, res) => {
  const { name } = req.query;
  let result = users;
  if (name) {
    result = users.filter(user => user.name === name);
  }
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Serveur disponible sur http://localhost:${PORT}`);
});