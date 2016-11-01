
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucaneers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bucaneers').insert({name: 'Anne Bonney', poison: 'Rum', accessory: 'hot temper', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg' }),
        knex('bucaneers').insert({name: 'One Eyed Willy', poison: 'Whiskey', accessory: 'eyepatch', image_url: 'http://propandartifact.com/Images/MikeyEyepatch.jpg'}),
        knex('bucaneers').insert({name: 'Blackbeard', poison: 'Whiskey', accessory: 'pegleg', image_url: 'http://cdn.history.com/sites/2/2015/06/GettyImages-173400421-A.jpeg'})
      ]);
    });
};
