export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2975',
  			'Image':'https://i.imgur.com/7n2yIIT.jpg',
  			'Name_tc':'火精靈王',
  			'Name_jp':'炎精霊王グローセ',
  			'hp':'28140',
  			'Atk_before':'115x3(4)回',
  			'Atk_after':'160x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','防禦type'],
  			'Characteristic_Before':['飛行','高速移動 Lv2'],
  			'Characteristic_After':['飛行','高速移動 Lv2','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'技能共嗚柱',
  			'Comment':"火精靈王"
  		}
  	)
}