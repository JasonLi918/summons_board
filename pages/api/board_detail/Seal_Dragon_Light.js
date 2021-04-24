export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3506',
  			'Image':'https://imgur.com/R7ZKJU8.jpg',
  			'Name_tc':'光封龍',
  			'Name_jp':'閃雷竜神獣ミレシア',
  			'hp':'15339',
  			'Atk_before':'402x3(4)回',
  			'Atk_after':'469x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['飛行','技能盾 Lv1'],
  			'Characteristic_After':['飛行','全體化','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'攻擊回數增加(+3)',
  			'Comment':"光封龍"
  		}
  	)
}