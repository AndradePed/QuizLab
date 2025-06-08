
const { error } = require('console');

const QuestaoModel = require('../models/questaoModel');
const AlternativaModel = require('../models/alternativaModel');


exports.mostrarQuestoes = async (req, res) => {
    try {
        const questaoModel = new QuestaoModel({});
        const questoes = await questaoModel.listaDeQuestoes();
        console.log('CONTROLLER OK')
        return questoes
    } catch (err) {
        console.log('Erro ao listar questões')
        throw err;
    }
}


exports.criacaoQuestao = async (req, res) => {
    try {
        const questaoModel = new QuestaoModel(req.body);
        const id_questao = await questaoModel.criacaoDeQuestao();

        req.body.id_questao = id_questao.id

        const alternativaModel = new AlternativaModel(req.body);
        await alternativaModel.criacaoDeAlternativas();

    } catch (err) {
        console.log('Erro ao listar questões')
        throw err;
    }

    // Agora somente fazer o controller para adicionar questão que está retornando o id e adicionar as alternativas (ficar de olho)
    // (tratar possíveis problemas que podem vir depois de criar ou excluir questões, principalmente com o id)
}


exports.buscaQuestaoQuiz = async(req, res) => {
    try {
        const questaoModel = new QuestaoModel(req.body);
        const dadosQuestao = await questaoModel.questaoSorteadaQuiz()



        // Vou receber 

    } catch(err) {
        console.log('Erro ao buscar questão')
        throw err;
    }
}