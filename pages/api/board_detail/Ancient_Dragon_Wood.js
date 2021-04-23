export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'2927',
  			'Image':'https://imgur.com/raYD0aH.jpg',
  			'Name_tc':'木古龍',
  			'Name_jp':'真疾古龍・ウィンフィールド',
  			'hp':'23254',
  			'Atk_before':'211x3(4)回',
  			'Atk_after':'232x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','砲擊type'],
  			'Characteristic_Before':['飛行','防禦性能 Lv3'],
  			'Characteristic_After':['飛行','防禦性能 Lv3','不意打 Lv2'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'指向共嗚柱(十字列)',
  			'Comment':"木古龍"
  		}
  	)
}