const config = require('./knexfile').development
const knex = require('knex')(config)

module.exports = {
  addPin,
  getAllPins,
  getPinById,
  getPinByArea
}

function addPin (pin, db = knex) {
  return db('pins')
    .insert({
      pin_name: pin.name,
      pin_lat: pin.lat,
      pin_long: pin.long,
      area_id: pin.areaId,
      emotion_type: pin.emotionType,
      comment: pin.comment,
      last_update_date: knex.fn.now()
    })
    .then(newPinId => newPinId[0])
}

function getAllPins (db = knex) {
  return db('pins')
    .select('pin_name', 'pin_lat', 'pin_long', 'area_id', 'emotion_type', 'comment', 'substr(last_update_date,0,11) as date')
    // .orderBy('pin_lat', 'asc')
}

function getPinById (pinId, db = knex) {
  return db('pins')
    .where('pin_id', pinId)
    .select('pin_name', 'pin_lat', 'pin_long', 'area_id', 'emotion_type', 'comment', 'substr(last_update_date,0,11) as date')
}

function getPinByArea (areaId, db = knex) {
  return db('pins')
    .join('areas', 'pins.area_id', 'areas.area_id')
    .where('area_id', areaId)
    .select('area_name', 'pin_name', 'pin_lat', 'pin_long', 'area_id', 'emotion_type', 'comment', 'substr(last_update_date,0,11) as date')
}
