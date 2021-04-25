export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3265',
  			'Image':'https://i.imgur.com/QbaWuDV.jpg',
  			'Name_tc':'水星獸姬',
  			'Name_jp':'想星獣姫プリエ',
  			'hp':'30595',
  			'Atk_before':'206x3(4)回',
  			'Atk_after':'235x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','防禦type'],
  			'Characteristic_Before':['飛行','道具吸收 Lv1'],
  			'Characteristic_After':['飛行','道具吸收 Lv2','全體化'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'技能共嗚柱',
  			'Comment':"水星獸姬"
  		}
  	)
}