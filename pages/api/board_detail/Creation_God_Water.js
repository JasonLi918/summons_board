export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2777',
  			'Image':'https://i.imgur.com/YNDwqUU.jpg',
  			'Name_tc':'水創神',
  			'Name_jp':'星創神イフ',
  			'hp':'21360',
  			'Atk_before':'218x3(4)回',
  			'Atk_after':'253x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','強襲type'],
  			'Characteristic_Before':['飛行','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['飛行','技能盾 Lv1&追加攻擊','道具吸收 Lv2'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"水創神"
  		}
  	)
}