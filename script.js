let junrenka = null;
let youMadePasta = null;

function start() {
  if (junrenka && !junrenka.paused) {
    junrenka.pause();
    junrenka.currentTime = 0; // 音の再生位置を先頭に戻す
  }
  junrenka = new Audio('純恋歌.wav');
  junrenka.volume = 1;
  junrenka.play();
}

function stop() {
    if (!junrenka.paused) {
        junrenka.pause();
        junrenka.currentTime = 0;
    };
}

function playSe() {
  if (youMadePasta && !youMadePasta.paused) {
    youMadePasta.pause();
    youMadePasta.currentTime = 0; // 音の再生位置を先頭に戻す
  }

  if (!junrenka) {
    // junrenkaが未定義の場合、生成して再生位置を先頭に戻す
    junrenka = new Audio('純恋歌.wav');
    junrenka.currentTime = 0;
  }

  youMadePasta = new Audio('パスタ作ったお前.wav');
  youMadePasta.volume = 1; // ボリュームを最大に設定
  junrenka.volume = 0;
  youMadePasta.play();
  youMadePasta.onended = function() {
    if (junrenka) {
      junrenka.volume = 1; // 最後まで流れたらjunrenkaのボリュームをMaxに設定
    }
  };
}
