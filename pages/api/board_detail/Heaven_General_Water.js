export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3600',
  			'Image':'https://imgur.com/zNMO9Us.jpg',
  			'Name_tc':'水天將',
  			'Name_jp':'水月天将『天后』竜胆',
  			'hp':'16975',
  			'Atk_before':'375x3(4)回',
  			'Atk_after':'424x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','輔助type'],
  			'Characteristic_Before':['全體化','暗屬性傷害輕減 Lv2'],
  			'Characteristic_After':['全體化','暗屬性傷害輕減 Lv2','攻擊吸收 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"水天將"
  		}
  	)
}