//const express = require('express')//
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({message: "Olá Mundo Express!",
        success: "Sucesso ao executar Api"
    })
})

app.listen(3000,() => {
    console.log('Servidor rodando em porta http://localhost:3000')
})