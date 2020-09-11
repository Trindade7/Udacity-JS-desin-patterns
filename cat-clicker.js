function Cat(userId) {
  this.id = userId;

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

  this.sub = document.getElementById(userId + '-sub').addEventListener('click', function () {
    click('sub');
    setValue();
  }, false);

  this.get = document.getElementById(userId + '-get').addEventListener('click', function () {
    click('get');
    setValue();
  }, false);


}

function main() {
  let gameCat = new Cat('player');
  console.log(gameCat);
}
main();