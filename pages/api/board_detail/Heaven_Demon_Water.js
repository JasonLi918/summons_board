export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3164',
  			'Image':'https://i.imgur.com/wIxhutI.jpg',
  			'Name_tc':'水天魔',
  			'Name_jp':'透映天魔マリア',
  			'hp':'16419',
  			'Atk_before':'320x3(4)回',
  			'Atk_after':'439x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','砲擊type'],
  			'Characteristic_Before':['詛咒 Lv3','水屬性傷害輕減 Lv1'],
  			'Characteristic_After':['迴避性能 Lv2','詛咒 Lv3','水屬性傷害輕減 Lv1'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'技能共嗚柱',
  			'Comment':"水天魔"
  		}
  	)
}