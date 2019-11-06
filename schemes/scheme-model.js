const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    remove,
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({ id: id })
        .first()
}

function findSteps(id) {
    return db('steps')
        .where({scheme_id: id})
}

function add(details) {
    return db('schemes')
            .insert(details)
            .then(newIdArray => {
                return findById(newIdArray[0])
            })
}

function remove(id) {
    return db('schemes')
            .where({ id: id })
            .del()
}