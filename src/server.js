//const express = require('express')//
import express from 'express'

const app = express()

app.post('/auth/signup', (req, res) => {
    res.json({message: "Rota de POST Auth/signup" })
})
app.post('/auth/login', (req, res) => {
    res.json({message: "Rota de POST Auth/login" })
})
app.post('/auth/logout', (req, res) => {
    res.json({message: "Rota de POST Auth/logout" })
})
app.post('/account/', (req, res) => {
    res.json({message: "Rota de POST Account" })
})
app.get('/acount/list', (req, res) => {
    res.json({message: "Rota de GET Account/list" })
})
app.put('/acount/:id', (req, res) => {
    res.json({message: "Rot de PUT Account ID" })
})
app.delete('/acount/:id', (req, res) => {
    res.json({message: "Rota de DELETE Account" })
})
app.listen(3000,() => {
    console.log('Servidor rodando em porta http://localhost:3000')
})