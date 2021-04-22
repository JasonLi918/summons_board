export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'1845',
  			'Image':'https://imgur.com/zhiwE2w.jpg',
  			'Name_tc':'嵐角王',
  			'Name_jp':'嵐槍角王・ドゥームエルシュ',
  			'hp':'19467',
  			'Atk_before':'230x3(4)回',
  			'Atk_after':'239x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','防禦type'],
  			'Characteristic_Before':['全體化','防禦性能 Lv3'],
  			'Characteristic_After':['全體化','防禦性能 Lv3','技能盾 Lv1'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"初代木限"
  		}
  	)
}