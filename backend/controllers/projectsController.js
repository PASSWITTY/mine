// controllers/projectsController.js
const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel');

// API endpoint for displaying a list of projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.render('projects', { projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for displaying the form to add a new project
router.get('/new', (req, res) => {
    res.render('projects-form', { pageTitle: 'Add New Project', formAction: '/projects' });
});

// API endpoint for displaying the form to edit a project
router.get('/:id/edit', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.render('projects-form', { pageTitle: 'Edit Project', formAction: `/projects/${project._id}?_method=PUT`, project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for handling the submission of the project form
router.post('/', async (req, res) => {
    // Validation logic here
    try {
        const { name, techStack, description } = req.body;
        const newProject = new Project({ name, techStack, description });
        const savedProject = await newProject.save();
        res.redirect('/projects');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for handling the submission of the edited project form
router.put('/:id', async (req, res) => {
    // Validation logic here
    try {
        const { name, techStack, description } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, { name, techStack, description }, { new: true });
        res.redirect('/projects');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for handling project deletion
router.delete('/:id', async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.id);
        res.redirect('/projects');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
