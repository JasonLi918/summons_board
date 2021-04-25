export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2685',
  			'Image':'https://imgur.com/rdXVxP5.jpg',
  			'Name_tc':'大靈貓',
  			'Name_jp':'スキルマスター・リット',
  			'hp':'17461',
  			'Atk_before':'259x3(4)回',
  			'Atk_after':'309x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','強襲type'],
  			'Characteristic_Before':['貫通 Lv2','攻擊吸收 Lv1'],
  			'Characteristic_After':['貫通 Lv2','攻擊吸收 Lv1','技能盾 Lv1'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'技能共嗚柱',
  			'Comment':"大靈貓"
  		}
  	)
}