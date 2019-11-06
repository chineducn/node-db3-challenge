const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    remove,
    update,
    addStep,
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
    return db('steps as st')
        .join('schemes as sc', 'sc.id', 'st.scheme_id')
        .select('sc.scheme_name', 'st.step_number', 'st.instructions')
        .where({ scheme_id: id })
        .orderBy('st.step_number')
}

function add(schemeDetails) {
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

function update(changes, id) {
    return db('schemes')
        .where({ id: id })
        .update(changes)
        .then(amountUpdated => {
            return findById(id)
        })
}

function addStep(stepDetails, id) {
    return db('steps')
        .insert(
            {
                ...stepDetails,
                scheme_id: id
            }
        )
        .then(newStepIdArray => {
           return db('steps')
                .where({
                    id: newStepIdArray[0]
                })
                .first()
        })
}