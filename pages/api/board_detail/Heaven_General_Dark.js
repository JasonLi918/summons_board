export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3684',
  			'Image':'https://imgur.com/8unQEKB.jpg',
  			'Name_tc':'暗天將',
  			'Name_jp':'陰月天将『太裳』綾目',
  			'hp':'27976',
  			'Atk_before':'219x3(4)回',
  			'Atk_after':'257x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','反擊type'],
  			'Characteristic_Before':['木屬性傷害輕減 Lv2','攻擊吸收 Lv2'],
  			'Characteristic_After':['貫通LV2&Boss殺手','木屬性傷害輕減 Lv2','攻擊吸收 Lv2'],
  			'Tp_Transform':'40',
  			'Tp_Characteristic':'超反擊',
  			'Comment':"暗天將"
  		}
  	)
}