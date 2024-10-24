/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lj8fyprew502yru")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xtnvfnm2",
    "name": "cost",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lj8fyprew502yru")

  // remove
  collection.schema.removeField("xtnvfnm2")

  return dao.saveCollection(collection)
})
