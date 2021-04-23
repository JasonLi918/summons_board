export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2967',
  			'Image':'https://imgur.com/u0RtrD9.jpg',
  			'Name_tc':'HPtype',
  			'Name_jp':'防禦type',
  			'hp':'26199',
  			'Atk_before':'200x3(4)回',
  			'Atk_after':'216x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','防禦type'],
  			'Characteristic_Before':['防禦性能 Lv3','愛心UP'],
  			'Characteristic_After':['防禦性能 Lv3','愛心UP','技能盾 Lv1'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具效果強化(隨機)',
  			'Comment':"暗古龍"
  		}
  	)
}