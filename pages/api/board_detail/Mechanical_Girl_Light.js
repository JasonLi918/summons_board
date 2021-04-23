export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3464',
  			'Image':'https://i.imgur.com/ltM0rF3.jpg',
  			'Name_tc':'光機娘',
  			'Name_jp':'SO928:V2-サイリスタ',
  			'hp':'33251',
  			'Atk_before':'302x3(4)回',
  			'Atk_after':'349x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','砲擊type'],
  			'Characteristic_Before':['貫通 Lv3','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['不意打 Lv3','貫通 Lv3','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具效果強化(攻擊)',
  			'Comment':"光機娘"
  		}
  	)
}