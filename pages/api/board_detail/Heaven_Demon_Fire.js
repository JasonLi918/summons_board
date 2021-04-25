export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3304',
  			'Image':'https://i.imgur.com/xAPqeUU.jpg',
  			'Name_tc':'火天魔',
  			'Name_jp':'紅貌天魔ベスタ',
  			'hp':'27238',
  			'Atk_before':'228x3(4)回',
  			'Atk_after':'264x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','反擊type'],
  			'Characteristic_Before':['貫通 Lv3','技能盾 Lv1'],
  			'Characteristic_After':['貫通 Lv3','迴避性能 Lv2','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"火天魔"
  		}
  	)
}