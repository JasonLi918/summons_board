export default function handler(req, res) {
  res.status(200).json([
  		{
        'name':'Beast_Master_Fire',
  			'tc_name':'炎龍王',
        'jp_name':'炎鳳竜王・レプティアス',
        'img':'https://i.imgur.com/6bBsDRn.jpg',
  			'type':'獸王'
  		},
  		{
  			'name':'Beast_Master_Water',
        'tc_name':'冰狼王',
        'jp_name':'氷魔狼王・ヴォルハス',
        'img':'https://i.imgur.com/mkx0gPT.jpg',
        'type':'獸王'
  		},
  		{
  			'name':'Beast_Master_Wood',
        'tc_name':'嵐角王',
        'jp_name':'嵐槍角王・ドゥームエルシュ',
        'img':'https://imgur.com/zhiwE2w.jpg',
        'type':'獸王'
  		},
      {
        'name':'Beast_Master_Light',
        'tc_name':'煌寶王',
        'jp_name':'煌天宝王・フェルルナーシュ',
        'img':'https://imgur.com/2qso3dt.jpg',
        'type':'獸王'
      },
      {
        'name':'Beast_Master_Dark',
        'tc_name':'黑雷王',
        'jp_name':'黒撃雷王・ロンドハーケン',
        'img':'https://i.imgur.com/51pfFrZ.jpg',
        'type':'獸王'
      },
      {
        'name':'Beast_Emperor_Fire',
        'tc_name':'煉擊帝',
        'jp_name':'煉獄帝獣・アドラグレンド',
        'img':'https://imgur.com/ZuNNGzd.jpg',
        'type':'獸帝'
      },
      {
        'name':'Beast_Emperor_Water',
        'tc_name':'深翔帝',
        'jp_name':'深渦帝獣・エイルヴュラー',
        'img':'https://imgur.com/agpcnJK.jpg',
        'type':'獸帝'
      },
      {
        'name':'Beast_Emperor_Wood',
        'tc_name':'鏡鱗帝',
        'jp_name':'鏡蓬帝獣・ベルセデリオ',
        'img':'https://imgur.com/qF0EI3a.jpg',
        'type':'獸帝'
      },
      {
        'name':'Beast_Emperor_Light',
        'tc_name':'機皇帝',
        'jp_name':'機艦帝獣・ゾンバルディエ',
        'img':'https://imgur.com/GdBneVF.jpg',
        'type':'獸帝'
      },
      {
        'name':'Beast_Emperor_Dark',
        'tc_name':'崩滅帝',
        'jp_name':'崩律帝獣・フィアドラーク',
        'img':'https://imgur.com/sJrL10B.jpg',
        'type':'獸帝'
      }
  	])
}