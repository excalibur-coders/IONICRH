import {
    createCurso, updateCurso, deleteCurso, readOneCurso, readManyCurso,
    createTrilha, updateTrilha, deleteTrilha, readOneTrilha, readManyTrilha,
    criarRelacao,
    createRelationCursoTrilha,
    consultaQueryCursoTrilhUser,
    updateUserTrilha,
    updateCursoTrilha,
    removeUserTrilha,
    removeCursoTrilha,
    adicionarConteudo,
    pegarTrilhaCurso,
    createModulo,updateModulo,deleteModulo,
    deleteDocs, updateDocs
} from "controllers/cursos";
import express from "express";
import multerConfig from 'config/multercurso'
import multer from 'multer';

const router = express.Router();

//Curso
router.post('/criar-curso', createCurso)
router.put('/atualizar-curso/:id', updateCurso)
router.delete('/deletar-curso/:id', deleteCurso)
router.get('/ver-curso/:id', readOneCurso)
router.get('/ver-cursos', readManyCurso)
//Trilha
router.post('/criar-trilha', createTrilha)
router.put('/atualizar-trilha/:id', updateTrilha)
router.delete('/deletar-trilha/:id', deleteTrilha)
router.get('/ver-trilha/:id', readOneTrilha)
router.get('/ver-trilhas', readManyTrilha)
//Modulo
router.post('/criar-modulo', createModulo)
router.delete('/deletar-modulo/:id', deleteModulo)
router.put('/update-modulo/:id', updateModulo)
//Docs
router.delete('/deletar-documento/:id', deleteDocs)
router.put('/alterar-documento/:id', updateDocs)
//
router.put('/alterar-curso-trilha/:trilhaTrilhaId/:cursoCursoId', updateCursoTrilha)
router.delete('/remover-curso-trilha/:trilhaTrilhaId/:cursoCursoId', removeCursoTrilha)
//
router.put('/alterar-user-trilha/:trilhaTrilhaId/:userUserId', updateUserTrilha)
router.delete('/remover-user-trilha/:trilhaTrilhaId/:userUserId', removeUserTrilha)
//
router.post('/vincular-user', criarRelacao)
router.post('/adicionar-material/:docsDocsId',
    multer(multerConfig)
        .fields([{ name: 'file', maxCount: 3 }]),
    adicionarConteudo)
router.post('/vincular-curso', createRelationCursoTrilha)
router.get('/ver-trilhas/:id', consultaQueryCursoTrilhUser)
router.get('/pegar-trilha-curso/:id/:curso/:docs', pegarTrilhaCurso)

export default router; 