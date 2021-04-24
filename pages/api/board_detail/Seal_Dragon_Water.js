export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3504',
  			'Image':'https://imgur.com/GMtJeN2.jpg',
  			'Name_tc':'水封龍',
  			'Name_jp':'絶凍竜神獣シュスト',
  			'hp':'18008',
  			'Atk_before':'364x3(4)回',
  			'Atk_after':'400x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','輔助type'],
  			'Characteristic_Before':['貫通 Lv2','詛咒 Lv2'],
  			'Characteristic_After':['貫通 Lv2','迴避性能 Lv3','詛咒 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"水封龍"
  		}
  	)
}