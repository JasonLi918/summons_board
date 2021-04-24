export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3507',
  			'Image':'https://imgur.com/9vFxtHr.jpg',
  			'Name_tc':'暗封龍',
  			'Name_jp':'冥夜竜神獣クロユリ',
  			'hp':'15000',
  			'Atk_before':'365x3(4)回',
  			'Atk_after':'405x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','防禦type'],
  			'Characteristic_Before':['全體化','飛來吸收 Lv2'],
  			'Characteristic_After':['全體化','飛來吸收 Lv2','道具吸收 Lv2'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具生成',
  			'Comment':"暗封龍"
  		}
  	)
}