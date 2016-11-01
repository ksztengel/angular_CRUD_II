'use strict'

exports.up = function(knex,Promise) {
    return knex.schema.createTable('bucaneers', (table) => {
            table.increments();
            table.string('name').notNullable().defaultTo('');
            table.string('poison').notNullable().defaultTo('');
            table.string('accessory').notNullable().defaultTo('');
            table.string('image_url').notNullable();
            table.timestamps(true, true);
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bucaneers')
}
