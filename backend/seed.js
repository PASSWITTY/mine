// seed.js
const mongoose = require('mongoose');
const Skill = require('./models/skillModel'); // Import your Skill model
const Project = require('./models/projectModel'); // Import your Project model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample data
const sampleSkills = [
    { name: 'Python', description: 'A general-purpose programming language known for its readability and versatility' },
    { name: 'HTML', description: 'The fundamental building block of web pages, used to define their structure and content' },
    { name: 'CSS', description: 'A language used to style the appearance of web pages, controlling elements like fonts, colors, and layout' },
    { name: 'Git', description: 'A version control system used for tracking changes in code and coordinating work among multiple developers' },
    { name: 'SQL', description: 'A language for interacting with and managing databases' },
    { name: 'Java', description: 'A popular object-oriented programming language used for building web applications, enterprise software, and mobile apps' },
    { name: 'Node.js', description: 'A JavaScript runtime environment that allows JavaScript code to be executed outside of a web browser' },
    { name: 'AWS (Amazon Web Services)', description: 'A comprehensive cloud computing platform offering a wide range of services, including storage, compute, networking, and databases' },
    { name: 'Machine Learning', description: 'A field of computer science that allows computers to learn without being explicitly programmed' },
    { name: 'Project Management', description: 'The process of planning, organizing, and managing resources to achieve specific goals within a set timeframe' },
    { name: 'Data Analysis', description: 'Using tools and techniques to understand and interpret data patterns, often for decision-making or problem-solving.' },
    { name: 'Cybersecurity', description: 'Protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction.' },
    { name: 'Public Speaking', description: 'Effectively communicating ideas and information to an audience, often in a persuasive or informative manner.' },
    { name: 'Graphic Design', description: 'Visual communication through creating images, logos, and layouts that convey messages and ideas.' },
    { name: 'Digital Marketing', description: 'Using online channels to promote products, services, or brands to customers and generate leads.' },
    { name: 'Content Writing', description: 'Creating engaging and informative written content for various purposes, such as websites, blogs, and marketing materials.' },
    { name: 'Time Management', description: 'Effectively planning and organizing tasks to meet deadlines and priorities.' },
    { name: 'Leadership', description: 'Inspiring and motivating others to achieve a common goal.' },
    { name: 'Negotiation', description: 'Reaching mutually beneficial agreements through discussion and compromise.' },
    { name: 'Critical Thinking', description: 'Analyzing information logically and objectively to form judgments and solve problems.' },
    { name: 'Foreign Language', description: 'Learning and speaking another language can enhance communication skills and open up new opportunities.' },
    { name: 'Collaboration', description: 'Working effectively with others towards a shared objective.' }
    
];

const sampleProjects = [
   
        {   name: 'Blog Builder', techStack: 'Python, Django, PostgreSQL', description: 'A web application for managing a blog' },
        {   name: 'E-Commerce Hub', techStack: 'Java, Spring Boot, MySQL', description: 'An e-commerce platform for selling products online' },
        {   name: 'Chat Central', techStack: 'Angular, Firebase', description: 'A real-time chat application' },
        {   name: 'Fitness Tracker', techStack: 'Swift, iOS SDK', description: 'A mobile app for tracking fitness goals' },
        {   name: 'Language Learner', techStack: 'Kotlin, Android SDK', description: 'A mobile game for learning a foreign language' },
        {   name: 'Image Classifier', techStack: 'TensorFlow, Python', description: 'An image recognition system for classifying objects in photos' },
        {   name: 'Customer Insights Dashboard', techStack: 'R, Shiny', description: 'A data visualization dashboard for exploring customer behavior' },
        {   name: 'Historical VR Experience', techStack: 'Unity, C#', description: 'A 3D virtual reality experience for exploring a historical site' },
        {   name: 'Real-Time Multiplayer Arena', techStack: 'Node.js, Express, Socket.IO', description: 'A multiplayer online game with real-time communication' },
        {   name: 'Task Master', techStack: 'React Native, Expo', description: 'A cross-platform mobile app for managing tasks and to-do lists' },
        {   name: 'Food Waste Tracker and Recipe Recommender', techStack: 'Python, Flask, MongoDB', description: 'A mobile app that helps users reduce food waste by tracking their inventory and suggesting recipes based on available ingredients, promoting sustainability and mindful consumption.'},
        {   name: 'AI-Powered Music Composition Assistant', techStack: 'TensorFlow, JavaScript, Web Audio API', description: 'A web application that empowers aspiring musicians of all backgrounds to create music by generating melodies and harmonies, fostering creativity and inclusivity in music production.'},
        {   name: 'Hyperlocal News Aggregator and Community Builder', techStack: 'React Native, Google Maps API, Firebase', description: 'A mobile app that connects people within their neighborhoods, fostering local engagement and inclusivity through shared news, events, and discussion forums.'},
        {   name: 'AR-Enhanced Language Learning App', techStack: 'Unity, Vuforia, Google Translate API', description: 'An augmented reality app that makes language learning accessible and engaging for diverse learners through interactive experiences and visual aids.'},
        {   name: 'Sustainable Travel Planner ', techStack: 'Django, OpenStreetMap API, Stripe', description: 'A web platform that empowers eco-conscious travel choices, promoting environmental awareness and social responsibility through sustainable trip planning and carbon offset options.'}
             
];

// Seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await Skill.deleteMany({});
    await Project.deleteMany({});

    // Insert sample data
    await Skill.insertMany(sampleSkills);
    console.log('skills added');
    await Project.insertMany(sampleProjects);
    console.log('project added');

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

// Run the seeder
seedDatabase();
