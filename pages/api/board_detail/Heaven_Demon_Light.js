export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3247',
  			'Image':'https://i.imgur.com/IebJE9i.jpg',
  			'Name_tc':'光天魔',
  			'Name_jp':'双叡天魔ニサ',
  			'hp':'23500',
  			'Atk_before':'218x3(4)回',
  			'Atk_after':'306x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','輔助type'],
  			'Characteristic_Before':['飛行'],
  			'Characteristic_After':['飛行','技能盾 Lv1&追加攻擊','高速移動 Lv3'],
  			'Tp_Transform':'20',
  			'Tp_Characteristic':'陷阱設置',
  			'Comment':"光天魔"
  		}
  	)
}