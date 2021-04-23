export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3463',
  			'Image':'https://i.imgur.com/et4AoMR.jpg',
  			'Name_tc':'木機娘',
  			'Name_jp':'SO135:V2-アレスタ',
  			'hp':'22760',
  			'Atk_before':'282x3(4)回',
  			'Atk_after':'316x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','防禦type'],
  			'Characteristic_Before':['防禦性能 Lv3','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['全體化','防禦性能 Lv3','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"木機娘"
  		}
  	)
}