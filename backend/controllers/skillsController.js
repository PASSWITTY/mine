// controllers/skillsController.js
const express = require('express');
const router = express.Router();
const Skill = require('../models/skillModel');

// API endpoint for displaying a list of skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.render('skills', { skills });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for displaying the form to add a new skill
router.get('/new', (req, res) => {
    res.render('skills-form', { pageTitle: 'Add New Skill', formAction: '/skills' });
});

// API endpoint for displaying the form to edit a skill
router.get('/:id/edit', async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        res.render('skills-form', { pageTitle: 'Edit Skill', formAction: `/skills/${skill._id}?_method=PUT`, skill });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for handling the submission of the skill form
router.post('/', async (req, res) => {
    // Validation logic here
    try {
        const { name, description } = req.body;
        const newSkill = new Skill({ name, description });
        const savedSkill = await newSkill.save();
        res.redirect('/skills');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for handling the submission of the edited skill form
router.put('/:id', async (req, res) => {
    // Validation logic here
    try {
        const { name, description } = req.body;
        const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        res.redirect('/skills');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API endpoint for handling skill deletion
router.delete('/:id', async (req, res) => {
    try {
        await Skill.findByIdAndRemove(req.params.id);
        res.redirect('/skills');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
