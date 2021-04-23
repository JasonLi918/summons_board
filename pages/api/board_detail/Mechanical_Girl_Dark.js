export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3465',
  			'Image':'https://i.imgur.com/DDSr8ZT.jpg',
  			'Name_tc':'暗機娘',
  			'Name_jp':'SO629c(バリスタ)',
  			'hp':'20351',
  			'Atk_before':'311x3(4)回',
  			'Atk_after':'354x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','反擊type'],
  			'Characteristic_Before':['對空攻擊 Lv1','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['對空攻擊 Lv1','技能盾 Lv1&追加攻擊','貫通LV2&Boss殺手'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"暗機娘"
  		}
  	)
}