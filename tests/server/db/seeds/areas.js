exports.seed = (knex, Promise) => {
  return knex('areas').del()
    .then(() => {
      return knex('areas').insert([
        {area_id: 1,
          area_name: 'Mt Eden',
          positions: '-36.867847,174.759383_-36.867818,174.768261_-36.874631,174.766384_-36.877980,174.767106_-36.900534,174.759828_-36.894807,174.739922_-36.877137,174.745627_-36.874758,174.737494_-36.867847,174.759383'
        },
        {area_id: 2,
          area_name: 'City Center',
          positions: '-36.860136,174.762389_-36.847523,174.782921_-36.840277,174.782792_-36.835856,174.758227_-36.843996,174.750073_-36.857595,174.755265_-36.859277,174.752648_-36.861887,174.754965_-36.860136,174.762389'
        },
        {area_id: 3,
          area_name: 'Parnell',
          positions: '-36.863976, 174.771074_-36.861538, 174.790343_-36.854190, 174.793476_-36.854354, 174.771832_-36.847566, 174.78327_-36.854354, 174.771832_-36.861916, 174.770430_-36.863976, 174.771074'
        },
        {area_id: 4,
          area_name: 'Grafton',
          positions: '-36.859954, 174.762669_-36.865131, 174.760587_-36.867856, 174.760907_-36.867786, 174.768310_-36.863976, 174.771074_-36.861916, 174.770430_-36.854265, 174.77224_-36.854354, 174.771832_-36.859954, 174.762669'
        },
        {area_id: 5,
          area_name: 'Eden Terrace',
          positions: '-36.859954, 174.762669_-36.865131, 174.760587_-36.867856, 174.760907_-36.867844, 174.759397_-36.869721, 174.75317_-36.865124, 174.751137_-36.861829, 174.755038_-36.859954, 174.762669'
        }
        // {area_id: 6,
        //   area_name: 'Kingsland',
        //   positions: '-36.869721, 174.75317_-36.865124, 174.751137_'//broght st
        // }
      ])
    })
}
