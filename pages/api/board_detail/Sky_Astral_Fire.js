export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3768',
  			'Image':'https://imgur.com/4umTDZ6.jpg',
  			'Name_tc':'火天星',
  			'Name_jp':'煉天星神獣マルティウス',
  			'hp':'34689',
  			'Atk_before':'273x3(4)回',
  			'Atk_after':'278x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','防禦type'],
  			'Characteristic_Before':['飛行','技能盾 Lv1'],
  			'Characteristic_After':['飛行','陷阱解除 Lv2','技能盾 Lv2'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'技能共嗚柱',
  			'Comment':"火天星"
  		}
  	)
}