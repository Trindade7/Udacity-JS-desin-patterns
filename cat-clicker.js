function Cat(userId, userName) {
  this.id = userId;
  this.name = (function setName() {
    const catName = userName;
    return function () {
      return catName;
    }
  }()());

  const click = (
    function catClick() {
      let count = 0;
      return function (action) {
        if (action === 'add') {
          count++;
        } else if (action === 'sub') {
          count--;
        } else if (action === 'get') {
          return count;
        } else if (action === 'reset') {
          count = 0;
        } else {
          alert('INVALID FUNCTION')
        }
        return count;
      };
    }
    ());

  let setValue = function () {
    document.getElementById(userId + '-value').innerHTML = click('get');
  };

  this.add = document.getElementById(userId + '-add').addEventListener('click', function () {
    click('add');
    setValue();
  }, false);
  this.reset = document.getElementById(userId + '-reset').addEventListener('click', function () {
    click('reset');
    setValue();
  }, false);

  // this.sub = document.getElementById(userId + '-sub').addEventListener('click', function () {
  //   click('sub');
  //   setValue();
  // }, false);

  // this.get = document.getElementById(userId + '-get').addEventListener('click', function () {
  //   click('get');
  //   setValue();
  // }, false);


}

function setPlayerName(player) {
  console.log(player.name);
  document.getElementById(player.id + '-name').innerHTML = player.name;
}

function main() {
  const player1Id = 'player';
  const player2Id = 'player2';
  let gameCat = new Cat(player1Id, player1Id);
  let gameCat2 = new Cat(player2Id, player2Id);

  setPlayerName(gameCat);
  setPlayerName(gameCat2);
}
main();